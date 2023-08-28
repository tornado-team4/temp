'use client';

import React, { useState } from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import { Box, Grid } from '@chakra-ui/react';
import { PuzzlePieceContainer } from './PuzzlePieceContainer';
import bg_img from '/public/bg_img.jpeg';
import { PuzzlePiece } from '../../types/PuzzlePiece';
import { ImageInfo } from '../../types/ImageInfo';
// import { set } from 'firebase/database';

export function ClientComponent() {
  // パズルのピースを一元管理するstate
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);

  // ユーザーのピースを管理する
  const [userPieces, setUserPieces] = useState<PuzzlePiece[]>([]);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const picture: ImageInfo = {
    url: '/dummy/hd2.jpg',
    width: 1280,
    height: 720,
  };

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

  return (
    <>
      <Box
        w="full"
        h="full"
        minH="100vh"
        bgImage={bg_img.src}
        objectFit="cover"
        p={8}
      >
        <PuzzleContainer
          onComplete={handleTimeout}
          puzzlePieces={puzzlePieces}
          imageInfo={picture}
        />
        <Grid
          templateColumns="5fr 7fr"
          position="fixed"
          bottom="0"
          left={0}
          right={0}
          gap={0}
        >
          <InputMemoryContainer
            inputRef={inputRef}
            onClick={handleClickSendMemory}
          />
          <PuzzlePieceContainer
            userPieces={userPieces}
            imageInfo={picture}
            handleComplete={handlePieceComplete}
          />
        </Grid>
      </Box>
    </>
  );
}
