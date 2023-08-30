import React, { useState } from 'react';
import { PuzzlePiece } from '../types/PuzzlePiece';

export const usePuzzle = () => {
  // パズルのピースを一元管理するstate
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);

  // ユーザーのピースを管理する
  const [userPieces, setUserPieces] = useState<PuzzlePiece[]>([]);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTimeout = (totalElapsedTime: number) => {
    console.log(totalElapsedTime);
  };

  const handlePieceComplete = (index: number) =>
    setPuzzlePieces((prev) => [...prev, { id: index, isCompleted: true }]);

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

  return {
    puzzlePieces,
    userPieces,
    inputRef,
    handleTimeout,
    handlePieceComplete,
    handleClickSendMemory,
  };
};
