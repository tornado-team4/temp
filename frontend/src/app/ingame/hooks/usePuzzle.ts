import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { ImageInfo } from '@/app/ingame/types/ImageInfo';
import { PuzzlePiece } from '@/app/ingame/types/PuzzlePiece';
import { db } from '@/libs/firebase/firebase';

type ChangedPiece = {
  type: string;
  data: PuzzlePiece;
};

type Props = {
  id: string;
  name: string;
  room_id: string;
};

export const usePuzzle = ({ id, name, room_id }: Props) => {
  // パズルのピースを一元管理するstate
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);

  // ユーザーのピースを管理する
  const [myPieces, setMyPieces] = useState<PuzzlePiece[]>([]);

  const [picture, setPicture] = useState<ImageInfo>({} as ImageInfo);

  const [isSendMessage, setIsSendMessage] = useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  // TODO: roomIdをどこかから取得する
  const roomId = room_id !== '' ? room_id : 'RdjowLXkiimSmNoanCxy';

  const piecesRef = collection(db, 'room', roomId, 'puzzlePieces');
  const commentsRef = collection(db, 'room', roomId, 'comments');
  const pictureRef = collection(db, 'room', roomId, 'gameObjects');

  const router = useRouter();

  const handleTimeout = (totalElapsedTime: number) => {
    console.log(totalElapsedTime);
    router.replace('/complete');
  };

  // ピースを嵌めた時firebaseを更新する
  const updatePiecesComplete = async (index: number) => {
    // if (puzzlePieces.length === 0) return;
    const q = query(piecesRef, where('id', '==', index));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (data) => {
      await updateDoc(data.ref, {
        isCompleted: true,
      });
    });
  };

  // ピースを嵌めた時の処理
  const handlePieceComplete = async (index: number) => {
    // setPuzzlePieces((prev) => [...prev, { id: index, isCompleted: true }]);
    await updatePiecesComplete(index);
  };

  const updateClickSendMemory = async (randomIndexes: number[]) => {
    const batch = writeBatch(db);
    await randomIndexes.map((index) => {
      batch.set(doc(piecesRef), {
        id: index,
        isCompleted: false,
        isUserHaving: true,
      });
    });
    await batch.commit();
  };

  // 送信ボタンを押した時にピースを選択する
  const choosePieces = () => {
    if (puzzlePieces.length > 20) return;

    // 0~23までの配列を作成
    const array = [...Array(24)].map((_, i) => i);
    // arrayからpuzzlePiecesのidを除外
    const filteredArray = array.filter(
      (item) => !puzzlePieces.find((p) => p.id === item),
    );
    // ランダムに並び替え
    const randomIndexes = filteredArray.sort(() => Math.random() - 0.5);
    // 0~3番目の要素を取得
    randomIndexes.splice(4);

    setMyPieces(
      randomIndexes.map((index) => ({
        id: index,
        isCompleted: false,
        isUserHaving: true,
      })),
    );
    updateClickSendMemory(randomIndexes);
    setIsSendMessage(true);
  };
  // 送信ボタン押した時に思い出を送信する
  const sendMemory = () => {
    const input = inputRef.current;
    addDoc(commentsRef, {
      gameProgress: 1,
      text: input?.value,
      userId: id,
      userName: name,
    });
  };
  // 送信ボタンを押した時の処理
  const handleClickSendMemory = () => {
    choosePieces();
    sendMemory();
  };

  // firebaseのパズルのピースが更新された時にstateを更新する
  const updatePuzzlePieces = (changes: ChangedPiece[]) => {
    setPuzzlePieces((prev) => {
      const newPuzzlePieces = [...prev];

      changes.forEach((piece) => {
        if (piece.type === 'added') {
          newPuzzlePieces.push(piece.data);
        } else if (piece.type === 'modified') {
          const index = newPuzzlePieces.findIndex(
            (p) => p.id === piece.data.id,
          );
          newPuzzlePieces[index] = piece.data;
        }
      });
      return newPuzzlePieces;
    });
  };

  // firebaseのパズルのピースを監視する
  const createListener = () => {
    const q = query(piecesRef);

    return onSnapshot(q, (querySnapshot) => {
      const pieces: ChangedPiece[] = [];
      querySnapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        pieces.push({
          type: change.type,
          data: {
            id: data.id,
            isCompleted: data.isCompleted,
            isUserHaving: data.isUserHaving,
          },
        });
      });
      updatePuzzlePieces(pieces);
    });
  };

  const createPictureListener = () => {
    const q = query(pictureRef);

    return onSnapshot(q, (querySnapshot) => {
      const pictures: ImageInfo[] = [];
      querySnapshot.forEach((docPic) => {
        if (docPic.id == 'Image') {
          const img = new Image();
          img.src = docPic.data().url;

          img.onload = () => {
            let imgWidth = 1280;
            let imgHeight = img.height * (imgWidth / img.width);
            if (imgHeight > 720) {
              imgHeight = 720;
              imgWidth = img.width * (imgHeight / img.height);
            }
            const url = docPic.data().url;
            pictures.push({
              url: url,
              width: imgWidth,
              height: imgHeight,
            });
            setPicture(pictures[0]);
          };
        }
      });
    });
  };

  const isCompleted = puzzlePieces.filter((p) => p.isCompleted === true);

  if (isCompleted.length >= 24) router.replace('/complete');

  return {
    puzzlePieces,
    myPieces,
    inputRef,
    picture,
    isSendMessage,
    handleTimeout,
    handlePieceComplete,
    handleClickSendMemory,
    createListener,
    createPictureListener,
  };
};
