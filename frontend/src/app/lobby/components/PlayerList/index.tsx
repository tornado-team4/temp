'use client';

import { User } from '@/types/User';
import {
  Box,
  VStack,
  Text,
  Card,
  CardBody,
  HStack,
  Avatar,
} from '@chakra-ui/react';

type Props = {
  list: User[];
};

export const PlayerList = ({ list }: Props) => {
  const playerNum = list.length;

  return (
    <Box w="full" borderRadius={10} py={8} px={28} bg="rgba(101,218,255,0.5)">
      <VStack spacing={6} textAlign="center">
        <Text
          color="white"
          fontSize={{ base: 'xl', sm: '2xl' }}
          fontWeight="bold"
        >
          プレイヤー {playerNum}/14
        </Text>
        <Box w="full" h="lg" overflow="scroll">
          <VStack spacing={3} w="full">
            {list.map((user) => (
              <Card key={user.id} bg="white" w="full">
                <CardBody>
                  <HStack spacing={4}>
                    <Avatar size="md" src={user.avatarUrl} />
                    <Text>{user.name}</Text>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};
