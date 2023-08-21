'use client';

import React from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import PuzzlePieceContainer from './PuzzlePieceContainer';
import { Grid } from '@chakra-ui/react';

export function ClientComponent() {
  return (
    <>
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
