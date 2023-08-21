'use client';

import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Piece } from '../elements/Puzzle/Piece';

export const PuzzlePieceContainer = () => {
  return (
    <Center height={100} bgColor="#D9D9D9">
      <Flex gap={4}>
        <Piece index={0} />
        <Piece index={8} />
        <Piece index={24} />
      </Flex>
    </Center>
  );
};
