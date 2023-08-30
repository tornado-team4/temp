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

  const piecesRef = collection(db, 'puzzlePieces');

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

    // 0~23からランダムに4つ選ぶ
    const randomIndexes = [...Array(4)].map(() =>
      Math.floor(Math.random() * 24),
    );

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
