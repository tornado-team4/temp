'use client';

import {
  Box,
  Avatar as ChakraAvatar,
  Icon,
  IconButton,
  ResponsiveValue,
  SkeletonCircle,
} from '@chakra-ui/react';
import { MdReplay } from 'react-icons/md';
import { useJoinRoomArea } from '../hooks/useJoinRoomArea';

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
};

export function Avatar({
  boxSize = 130,
  avatarSize = '2xl',
  iconButtonSize = 'sm',
  iconSize = 20,
  avatarList: list,
}: Props) {
  const { avatar, setAvatar, avatarList } = useJoinRoomArea();

  // 配列の中からランダムで1つの値を取得する関数
  const chooseAtRandom = (data: string[]) => {
    const arrayIndex = Math.floor(Math.random() * data.length);
    return data[arrayIndex];
  };

  const changeAvatar = () => {
    // TODO: 重複を消した状態のアバターのリストを取得する
    const newAvatar = chooseAtRandom(list ? list : avatarList ?? []);
    setAvatar(newAvatar);
  };

  return (
    <Box pos="relative" w={boxSize}>
      {avatar ? (
        <ChakraAvatar size={avatarSize} src={avatar} />
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
