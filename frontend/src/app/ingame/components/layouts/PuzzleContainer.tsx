'use client';

import { Box, Center, Grid } from '@chakra-ui/react';
import React from 'react';
import { DraggableArea } from '../elements/DraggableArea';

export function PuzzleContainer() {
  return (
    <Center p={0} bgColor={'#0071b3'} height="90vh">
      <Box
        width={1280}
        height={720}
        bg="whiteAlpha.500"
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
