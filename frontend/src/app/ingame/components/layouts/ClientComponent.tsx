'use client';

import React, { useState } from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import { Box, Grid } from '@chakra-ui/react';
import { PuzzlePieceContainer } from './PuzzlePieceContainer';
import bg_img from '/public/bg_img.jpeg';
import { PuzzlePiece } from '../../types/PuzzlePiece';
// import { set } from 'firebase/database';

export function ClientComponent() {
  // パズルのピースを一元管理するstate
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);

  const handleTimeout = (totalElapsedTime: number) => {
    console.log(totalElapsedTime);
  };

  const handlePieceComplete = () => {
    setPuzzlePieces((prev) => [...prev, { id: 0, isCompleted: true }]);
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
        />
        <Grid
          templateColumns="7fr 5fr"
          position="fixed"
          bottom="0"
          left={0}
          right={0}
          gap={0}
        >
          <InputMemoryContainer />
          <PuzzlePieceContainer handleComplete={handlePieceComplete} />
        </Grid>
      </Box>
    </>
  );
}
