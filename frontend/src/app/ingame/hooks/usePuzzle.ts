import React, { useState } from 'react';
import { PuzzlePiece } from '../types/PuzzlePiece';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/libs/firebase/firebase';

export const usePuzzle = () => {
  // パズルのピースを一元管理するstate
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);

  // ユーザーのピースを管理する
  const [userPieces, setUserPieces] = useState<PuzzlePiece[]>([]);

  const inputRef = React.useRef<HTMLInputElement>(null);

  // TODO: roomIdをどこかから取得する
  const roomId = '9brRzPHU7qKushbl2DUl';

  const piecesRef = collection(db, 'room', roomId, 'puzzlePieces');

  const handleTimeout = (totalElapsedTime: number) => {
    console.log(totalElapsedTime);
  };

  // firebaseのパズルのピースを更新する
  const updatePieces = async (index: number) => {
    // if (puzzlePieces.length === 0) return;

    await addDoc(piecesRef, {
      id: index,
      isCompleted: true,
    });
  };

  const handlePieceComplete = async (index: number) => {
    setPuzzlePieces((prev) => [...prev, { id: index, isCompleted: true }]);
    await updatePieces(index);
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

    console.log(randomIndexes);
    console.log(puzzlePieces);

    setUserPieces(
      randomIndexes.map((index) => ({ id: index, isCompleted: true })),
    );
  };

  // firebaseのパズルのピースを監視する
  const createListener = () => {
    const q = query(piecesRef);

    return onSnapshot(q, (querySnapshot) => {
      const pieces: PuzzlePiece[] = [];
      querySnapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        pieces.push({
          id: data.id,
          isCompleted: data.isCompleted,
        });
      });
      setPuzzlePieces((prev) => [...prev, ...pieces]);
    });
  };

  return {
    puzzlePieces,
    userPieces,
    inputRef,
    handleTimeout,
    handlePieceComplete,
    handleClickSendMemory,
    createListener,
  };
};
