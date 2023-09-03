'use client';

import type { Dispatch, SetStateAction } from 'react';
import { MdReplay } from 'react-icons/md';

import {
  Box,
  Avatar as ChakraAvatar,
  Icon,
  IconButton,
  ResponsiveValue,
  SkeletonCircle,
} from '@chakra-ui/react';

type Props = {
  boxSize?: number;
  avatarSize?:
    | ResponsiveValue<
        | (string & object)
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '2xs'
        | 'xs'
        | 'full'
      >
    | undefined;
  iconButtonSize?:
    | ResponsiveValue<(string & object) | 'sm' | 'md' | 'lg' | 'xs'>
    | undefined;
  iconSize?: number;
  avatarList?: string[];
  avatarUrl?: string;
  setAvatarUrl: Dispatch<SetStateAction<string>>;
};

export function Avatar({
  boxSize = 130,
  avatarSize = '2xl',
  iconButtonSize = 'sm',
  iconSize = 20,
  avatarList,
  avatarUrl,
  setAvatarUrl,
}: Props) {
  // 配列の中からランダムで1つの値を取得する関数
  const chooseAtRandom = (data: string[]) => {
    const arrayIndex = Math.floor(Math.random() * data.length);
    return data[arrayIndex];
  };

  const changeAvatar = () => {
    // TODO: 重複を消した状態のアバターのリストを取得する
    const newAvatar = chooseAtRandom(avatarList ?? []);
    setAvatarUrl(newAvatar);
  };

  return (
    <Box pos="relative" w={boxSize}>
      {avatarUrl ? (
        <ChakraAvatar size={avatarSize} src={avatarUrl} />
      ) : (
        <SkeletonCircle size="128" />
      )}
      <IconButton
        pos="absolute"
        bottom={0}
        right={0}
        isRound
        variant="solid"
        aria-label="change avatar"
        fontSize={iconSize}
        bg="white"
        border="1px"
        size={iconButtonSize}
        icon={<Icon as={MdReplay} />}
        onClick={changeAvatar}
      />
    </Box>
  );
}
