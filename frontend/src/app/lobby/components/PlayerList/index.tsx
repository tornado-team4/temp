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
    <Box
      w="full"
      borderRadius={10}
      py={8}
      px={{ base: 10, sm: 12 }}
      bg="rgba(101,218,255,0.5)"
    >
      <VStack spacing={6} textAlign="center">
        <Text
          color="white"
          fontSize={{ base: 'xl', sm: '2xl' }}
          fontWeight="bold"
        >
          プレイヤー {playerNum}/6
        </Text>
        <Box w="full" h="lg" overflowY="scroll">
          <VStack spacing={3} w="full">
            {list.length > 0 ? (
              list.map((user) => (
                <Card key={user.name} bg="white" w="full">
                  <CardBody>
                    <HStack spacing={4}>
                      <Avatar size="md" src={user.avatar} />
                      <Text>{user.name}</Text>
                    </HStack>
                  </CardBody>
                </Card>
              ))
            ) : (
              <Text fontSize="2xl" fontWeight="bold" color="white">
                参加者がいません
              </Text>
            )}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};
