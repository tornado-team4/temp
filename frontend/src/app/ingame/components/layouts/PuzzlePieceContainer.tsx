'use client';

import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Piece } from '../elements/Puzzle/Piece';

type Props = {
  handleComplete: () => void;
};
export const PuzzlePieceContainer = ({ handleComplete }: Props) => {
  return (
    <Center height={100} bgColor="#D9D9D9">
      <Flex gap={4}>
        <Piece index={0} handleComplete={handleComplete} />
        <Piece index={8} handleComplete={handleComplete} />
        <Piece index={23} handleComplete={handleComplete} />
      </Flex>
    </Center>
  );
};
