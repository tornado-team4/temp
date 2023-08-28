'use client';

import React from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import { Grid } from '@chakra-ui/react';
import { PuzzlePieceContainer } from './PuzzlePieceContainer';
import { Timer } from './Timer';

export function ClientComponent() {
  return (
    <>
      <Timer />
      <PuzzleContainer />
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
    </>
  );
}
