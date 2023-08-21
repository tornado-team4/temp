'use client';

import { EditIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';

export function InputMemoryContainer() {
  return (
    <Center height={100} bgColor="#78CDFD">
      <Flex gap={5}>
        <InputGroup width={500}>
          <InputLeftElement>
            <EditIcon />
          </InputLeftElement>
          <Input
            bgColor="whiteAlpha.900"
            placeholder="この写真へ思い出の一言"
            maxLength={20}
          />
        </InputGroup>

        <Button rightIcon={<EmailIcon />}>送る</Button>
      </Flex>
    </Center>
  );
}
