'use client';

import { HStack, Box } from '@chakra-ui/react';
import { JoinRoomArea } from '@/app/top/components/JoinRoomArea';
import { HowToPlayArea } from './components/HowToPlayArea';

export default function Top() {
  return (
    <HStack justifyContent="center">
      <JoinRoomArea />
      <Box w="50%">
        <HowToPlayArea />
      </Box>
    </HStack>
  );
}
