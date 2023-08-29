'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { Avatar } from '@/app/top/components/Avatar';
import { OutlineButtonWithRightIcon } from '@/components/Button/OutlineButtonWithRightIcon';
import { InputName } from '@/components/Input/Name';
import { useJoinRoomArea } from '../hooks/useJoinRoomArea';

export function JoinRoomArea() {
  const { name, setName, onSubmitHandler, avatar, setAvatar, avatarList } =
    useJoinRoomArea();

  return (
    <Box w="full" bgColor="#65DAFF" borderRadius="lg" py={8} px={28}>
      <VStack spacing={6} textAlign="center">
        <Text color="white" fontSize="2xl" fontWeight="bold">
          自分のアバターを設定してください
        </Text>
        <Avatar
          avatarList={avatarList}
          avatarUrl={avatar}
          setAvatarUrl={setAvatar}
        />
        <InputName
          borderColor="#56C1FC"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box w="60%">
          <OutlineButtonWithRightIcon
            text="参加"
            rightIcon={<BiSolidRightArrow />}
            color="#56C1FC"
            bgColor="white"
            onClick={onSubmitHandler}
          />
        </Box>
      </VStack>
    </Box>
  );
}
