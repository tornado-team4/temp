import React, { useState } from 'react';
import { PuzzlePiece } from '../types/PuzzlePiece';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { db } from '@/libs/firebase/firebase';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/userState';

type ChangedPiece = {
  type: string;
  data: PuzzlePiece;
};

export const usePuzzle = () => {
  const recoilData = useRecoilValue(userState);

  // パズルのピースを一元管理するstate
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);

  // ユーザーのピースを管理する
  const [myPieces, setMyPieces] = useState<PuzzlePiece[]>([]);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const roomId = recoilData.roomId;

  const piecesRef = collection(db, 'room', roomId, 'puzzlePieces');

  const handleTimeout = (totalElapsedTime: number) => {
    console.log(totalElapsedTime);
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
  const handleClickSendMemory = () => {
    const input = inputRef.current;
    console.log(input?.value);

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

  return {
    puzzlePieces,
    myPieces,
    inputRef,
    handleTimeout,
    handlePieceComplete,
    handleClickSendMemory,
    createListener,
  };
};
