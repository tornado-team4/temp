'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { Avatar } from '@/app/top/components/Avatar';
import { OutlineButtonWithRightIcon } from '@/components/Button/OutlineButtonWithRightIcon';
import { InputName } from '@/components/Input/Name';
import { useJoinRoomArea } from '../hooks/useJoinRoomArea';

type Props = {
  roomId: string;
};

export function JoinRoomArea({ roomId }: Props) {
  const { name, setName, onCreateRoomHandler, onJoinRoomHandler } =
    useJoinRoomArea();

  const handleJoinRoom = async () => {
    if (roomId === '') {
      await onCreateRoomHandler();
    } else {
      await onJoinRoomHandler(roomId);
    }

    // ここに非同期処理が完了した後の状態更新などを追加
  };

  return (
    <Box w="full" bgColor="#65DAFF" borderRadius="lg" py={8} px={28}>
      <VStack spacing={6} textAlign="center">
        <Text color="white" fontSize="2xl" fontWeight="bold">
          自分のアバターを設定してください
        </Text>
        <Avatar />
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
            onClick={handleJoinRoom}
          />
        </Box>
      </VStack>
    </Box>
  );
}
