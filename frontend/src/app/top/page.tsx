'use client';

import { Stack, Box, VStack, Image } from '@chakra-ui/react';
import { JoinRoomArea } from '@/app/top/components/JoinRoomArea';
import { HowToPlayArea } from '@/app/top/components/HowToPlayArea';
import logo from '/public/logo.png';
import bg_img from '/public/bg_img.jpeg';

export default function Top() {
  return (
    <Box
      w="full"
      h="full"
      minH="100vh"
      bgImage={bg_img.src}
      objectFit="cover"
      p={8}
    >
      <Box
        w="full"
        h="full"
        minH="100vh"
        bg="whiteAlpha.500"
        borderRadius={10}
        py={10}
        px={4}
      >
        <VStack h="full" w="full">
          <Image src={logo.src} alt="青春パズルロゴ" />
          <Box h={{ base: 14, md: 20 }} />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            w="full"
            justifyContent="center"
          >
            <Box w={{ base: 'full', md: '50%' }}>
              <JoinRoomArea />
            </Box>
            <Box w={{ base: 'full', md: '50%' }}>
              <HowToPlayArea />
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
}
