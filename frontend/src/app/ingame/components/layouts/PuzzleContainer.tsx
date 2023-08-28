'use client';

import { Box, Center, Grid } from '@chakra-ui/react';
import React from 'react';
import { DraggableArea } from '../elements/DraggableArea';
import { Timer } from './Timer';

export function PuzzleContainer() {
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
      <Timer />

      <Box
        width={1280}
        height={720}
        bg="whiteAlpha.800"
        border="5px dashed #fff219"
      >
        <Grid templateColumns="repeat(6, 1fr)" gap={0}>
          {[...Array(24)].map((_, i) => (
            <DraggableArea key={i} index={i} />
          ))}
        </Grid>
      </Box>
    </Center>
  );
}
