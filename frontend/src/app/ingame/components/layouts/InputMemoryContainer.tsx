'use client';

import { Button, Center, Flex, Input } from '@chakra-ui/react';
import React from 'react';

export function InputMemoryContainer() {
  return (
    <Center height={100} bgColor="#78CDFD">
      <Flex gap={5}>
        <Input
          placeholder="この写真へ思い出の一言"
          bgColor="whiteAlpha.900"
          width={500}
        />
        <Button>送る</Button>
      </Flex>
    </Center>
  );
}
