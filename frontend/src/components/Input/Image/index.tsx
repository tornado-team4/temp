'use client';

import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import {
  Center,
  FormLabel,
  ImageProps,
  Input,
  Skeleton,
  Image,
  Icon,
  HStack,
  Text,
} from '@chakra-ui/react';
import { GrAdd } from 'react-icons/gr';

type Props = {
  id: string;
  onChangeImage: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  minH?: number;
  minW?: number;
  maxH?: number;
  maxW?: number;
};

export const InputImage = ({
  id,
  onChangeImage,
  label,
  minH = 96,
  minW = 96,
  maxW = 96,
  maxH = 96,
  ...props
}: Props & ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(!props.src);

  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Center>
      <FormLabel htmlFor={id} cursor="pointer" m="0">
        <Skeleton isLoaded={isLoaded} width="fit-content">
          <Image
            w="full"
            h="full"
            minH={minH}
            minW={minW}
            maxH={maxH}
            maxW={maxW}
            alt={props.alt}
            onLoad={onLoad}
            onError={onLoad}
            objectFit="cover"
            fallback={
              <Center
                w="full"
                h="full"
                minW={minW}
                minH={minH}
                bg="white"
                p={10}
                border={'1px solid'}
              >
                <HStack>
                  <Text>{label}</Text>
                  <Icon as={GrAdd} />
                </HStack>
              </Center>
            }
            {...props}
          />
        </Skeleton>
        <Input
          id={id}
          type="file"
          display="none"
          accept="image/*"
          onChange={onChangeImage}
        />
      </FormLabel>
    </Center>
  );
};
