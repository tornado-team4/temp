'use client';

import { Box, Center } from '@chakra-ui/react';
import React from 'react';

export function PuzzleContainer() {
  return (
    <Center p={0} bgColor={'#0071b3'} height="90vh">
      <Box
        width={1280}
        height={720}
        bg="whiteAlpha.500"
        border="5px dashed #fff219"
      ></Box>
      ;
    </Center>
  );
}
