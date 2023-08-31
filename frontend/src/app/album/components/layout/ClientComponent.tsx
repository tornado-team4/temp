'use client';

import { Box } from '@chakra-ui/react';
import bg_img from '/public/bg_img.jpeg';
import { Comments } from './Comments';
import { Photos } from './Photos';

export function ClientComponent() {
  return (
    <Box
      w="full"
      h="full"
      minH="100vh"
      bgImage={bg_img.src}
      objectFit="cover"
      p={8}
    >
      <Comments />
      <Photos />
    </Box>
  );
}
