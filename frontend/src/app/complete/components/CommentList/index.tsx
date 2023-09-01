'use client';

import { Box, VStack, Text } from '@chakra-ui/react';

import { Comment } from '@/types/Comment';

type Props = {
  commentList: Comment[];
};

export const CommentList = ({ commentList }: Props) => {
  return (
    <Box w="full" h="lg" overflow="scroll-y">
      <VStack spacing={3} w="full">
        {commentList.map((comment) => (
          <Box
            key={comment.id}
            bg="white"
            w="100%"
            p={4}
            borderColor="#56C1FC"
            color={'#B4B4B7'}
            borderWidth={1}
          >
            <Text>{comment.text}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
