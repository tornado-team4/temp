'use client';

import React from 'react';

import { Box, Center, Grid } from '@chakra-ui/react';

import { DraggableArea } from '@/app/ingame/components/elements/DraggableArea';
import { Timer } from '@/app/ingame/components/layouts/Timer';
import { ImageInfo } from '@/app/ingame/types/ImageInfo';
import { PuzzlePiece } from '@/app/ingame/types/PuzzlePiece';

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
