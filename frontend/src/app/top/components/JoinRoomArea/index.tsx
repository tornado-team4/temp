'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { Avatar } from '@/app/top/components/Avatar';
import { OutlineButtonWithRightIcon } from '@/components/Button/OutlineButtonWithRightIcon';
import { InputName } from '@/components/Input/Name';

export function JoinRoomArea() {
  return (
    <Box maxW="50%" bgColor="#65DAFF" borderRadius="lg" py={8} px={28}>
      <VStack spacing={6} textAlign="center">
        <Text color="white" fontSize="2xl" fontWeight="bold">
          自分のアバターを設定してください
        </Text>
        <Avatar />
        <InputName borderColor="#56C1FC" />
        <Box w="60%">
          <OutlineButtonWithRightIcon
            text="参加"
            rightIcon={<BiSolidRightArrow />}
            color="#56C1FC"
            bgColor="white"
          />
        </Box>
      </VStack>
    </Box>
  );
}
