'use client';

import React from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import { Box, Grid } from '@chakra-ui/react';
import { PuzzlePieceContainer } from './PuzzlePieceContainer';
import bg_img from '/public/bg_img.jpeg';

export function ClientComponent() {
  const handleComplete = (totalElapsedTime: number) => {
    console.log(totalElapsedTime);
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
        <PuzzleContainer onComplete={handleComplete} />
        <Grid
          templateColumns="7fr 5fr"
          position="fixed"
          bottom="0"
          left={0}
          right={0}
          gap={0}
        >
          <InputMemoryContainer />
          <PuzzlePieceContainer />
        </Grid>
      </Box>
    </>
  );
}
