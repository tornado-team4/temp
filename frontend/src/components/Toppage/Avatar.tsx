'use client';

import {
  Box,
  Avatar as ChakraAvatar,
  Icon,
  IconButton,
  SkeletonCircle,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdReplay } from 'react-icons/md';

const dummyAvatarImgList = [
  'https://bit.ly/dan-abramov',
  'https://bit.ly/kent-c-dodds',
  'https://bit.ly/ryan-florence',
  'https://bit.ly/prosper-baba',
  'https://bit.ly/code-beast',
];

export function Avatar() {
  const [avatarImg, setAvatarImg] = useState('');

  useEffect(() => setAvatarImg(dummyAvatarImgList[0]), []);

  // 配列の中からランダムで1つの値を取得する関数
  const chooseAtRandom = (data: string[]) => {
    const arrayIndex = Math.floor(Math.random() * data.length);
    return data[arrayIndex];
  };

  const changeAvatar = () => {
    // 重複するリスト内のアイテムを削除する
    const data = dummyAvatarImgList.filter((item) => item !== avatarImg);
    const newAvatar = chooseAtRandom(data);
    setAvatarImg(newAvatar);
  };

  return (
    <Box pos="relative" w={130}>
      {avatarImg ? (
        <ChakraAvatar size="2xl" src={avatarImg} />
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
        fontSize={20}
        bg="white"
        border="1px"
        size="sm"
        icon={<Icon as={MdReplay} />}
        onClick={changeAvatar}
      />
    </Box>
  );
}
