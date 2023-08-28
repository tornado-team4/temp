'use client';

import { Box, Center, Grid } from '@chakra-ui/react';
import React from 'react';
import { DraggableArea } from '../elements/DraggableArea';
import { Timer } from './Timer';
import { PuzzlePiece } from '../../types/PuzzlePiece';
import { ImageInfo } from '../../types/ImageInfo';

type Props = {
  onComplete: (totalElapsedTime: number) => void;
  puzzlePieces: PuzzlePiece[];
  imageInfo: ImageInfo;
};

export function PuzzleContainer({
  onComplete,
  puzzlePieces,
  imageInfo,
}: Props) {
  return (
    <Center
      w="full"
      h="full"
      minH="90vh"
      bg="whiteAlpha.500"
      borderRadius={10}
      py={10}
      px={4}
    >
      <Timer onComplete={onComplete} />

      <Box
        width={imageInfo.width}
        height={imageInfo.height}
        bg="whiteAlpha.800"
        border="5px dashed #fff219"
        boxSizing="content-box"
      >
        <Grid templateColumns="repeat(6, 1fr)" gap={0}>
          {[...Array(24)].map((_, i) => (
            <DraggableArea
              key={i}
              index={i}
              imageInfo={imageInfo}
              isComplete={
                puzzlePieces.filter((p) => p.id === i)[0]?.isCompleted || false
              }
            />
          ))}
        </Grid>
      </Box>
    </Center>
  );
}
