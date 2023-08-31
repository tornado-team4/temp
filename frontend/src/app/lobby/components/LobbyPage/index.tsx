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
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/userState';

export const LobbyPage = () => {
  const recoilUserState = useRecoilValue(userState);
  const { players, image, setImage, handleStart, isLoading, copylink } =
    useLobbyPage({
      roomId: recoilUserState.roomId,
    });

  if (recoilUserState.roomId === '') return <>不正なアクセス</>;

  const validateStart = () => {
    // 開始を押せるのは、ホストかつ画像が設定されている場合
    return !(recoilUserState.role === 'host' && image);
  };

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
                <PuzzleMaker
                  isHost={recoilUserState.role === 'host'}
                  setImage={setImage}
                  label={
                    recoilUserState.role === 'host'
                      ? 'パズルを選択'
                      : 'ホストがパズルを設定してください'
                  }
                />
                <VSpacer size={8} />
                <HStack w="full">
                  <OutlineButtonWithRightIcon
                    height="70px"
                    text={'招待する'}
                    rightIcon={<LinkIcon />}
                    color={'#56C1FC'}
                    bgColor={'white'}
                    isDisabled={false}
                    onClick={copylink}
                  />
                  <OutlineButtonWithRightIcon
                    height="70px"
                    text={'開始'}
                    rightIcon={<BiSolidRightArrow />}
                    color={'#56C1FC'}
                    bgColor={'white'}
                    isDisabled={validateStart()}
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
