'use client';

import { VSpacer } from '@/components/Spacer';
import { Box, VStack, Image, Stack, HStack } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import { BiSolidRightArrow } from 'react-icons/bi';
import bg_img from 'public/bg_img.jpeg';
import logo from 'public/logo.png';
import { PlayerList } from '@/app/lobby/components/PlayerList';
import { PuzzleMaker } from '@/app/lobby/components/PuzzleMaker';
import { OutlineButtonWithRightIcon } from '@/components/Button/OutlineButtonWithRightIcon';
import { useLobbyPage } from '@/app/lobby/hooks/useLobbyPage';

export const LobbyPage = () => {
  // 一旦roomIDを直で記載
  const roomId = 'TBOvYdRCOpVK3aW3qMLp';
  const { players, setImage, handleStart, isLoading } = useLobbyPage({
    roomId: roomId,
  });

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
          <VSpacer size={12} />
          <Stack direction={{ base: 'column', md: 'row' }} w="full">
            <Box w={{ base: 'full', md: '50%' }}>
              <PlayerList list={players} />
            </Box>
            <Box w={{ base: 'full', md: '50%' }}>
              <VStack h="full" w="full">
                <PuzzleMaker setImage={setImage} />
                <VSpacer size={8} />
                <HStack w="full">
                  <OutlineButtonWithRightIcon
                    height="70px"
                    text={'招待する'}
                    rightIcon={<LinkIcon />}
                    color={'#56C1FC'}
                    bgColor={'white'}
                    isDisabled={false}
                  />
                  <OutlineButtonWithRightIcon
                    height="70px"
                    text={'開始'}
                    rightIcon={<BiSolidRightArrow />}
                    color={'#56C1FC'}
                    bgColor={'white'}
                    isDisabled={false}
                    isLoading={isLoading}
                    onClick={handleStart}
                  />
                </HStack>
              </VStack>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
};
