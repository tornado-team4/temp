'use client';

import React from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import PuzzlePieceContainer from './PuzzlePieceContainer';

export function ClientComponent() {
  return (
    <>
      <PuzzleContainer />
      <InputMemoryContainer />
      <PuzzlePieceContainer />
    </>
  );
}
