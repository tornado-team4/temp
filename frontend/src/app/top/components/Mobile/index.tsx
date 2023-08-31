import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import bg_img from '/public/bg_img.jpeg';

export const Mobile = () => {
  return (
    <>
      <Box h="100vh" bgImage={bg_img.src} objectFit="cover" p={8}>
        <Center
          w="full"
          h="full"
          bg="whiteAlpha.500"
          borderRadius={10}
          py={10}
          px={4}
        >
          <Text whiteSpace="pre-line">
            {'青春パズルをご利用いただきありがとうございます。\n' +
              '現在弊サービスはPC版ブラウザからのみご利用いただけます。\n' +
              'モバイル版ブラウザへの対応も順次行っていく予定です。'}
          </Text>
        </Center>
      </Box>
    </>
  );
};
