'use client';

import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { Piece } from '../elements/Puzzle/Piece';
import { ImageInfo } from '../../types/ImageInfo';

type Props = {
  handleComplete: (index: number) => void;
  imageInfo: ImageInfo;
};
export const PuzzlePieceContainer = ({ handleComplete, imageInfo }: Props) => {
  return (
    <Center height={100} bgColor="#D9D9D9">
      <Flex gap={4}>
        <Piece
          index={0}
          handleComplete={handleComplete}
          imageInfo={imageInfo}
        />
        <Piece
          index={8}
          handleComplete={handleComplete}
          imageInfo={imageInfo}
        />
        <Piece
          index={23}
          handleComplete={handleComplete}
          imageInfo={imageInfo}
        />
      </Flex>
    </Center>
  );
};
