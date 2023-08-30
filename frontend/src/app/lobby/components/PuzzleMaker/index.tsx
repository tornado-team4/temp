'use client';

import { useState } from 'react';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { InputImage } from '@/components/Input/Image';
import { Box, VStack, Text } from '@chakra-ui/react';

type Props = {
  setImage: Dispatch<SetStateAction<File | null>>;
};

export const PuzzleMaker = ({ setImage }: Props) => {
  const [previewImageUrl, setPreviewImageUrl] = useState('');

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const uploadedImage = event.target.files.item(0);
    if (!uploadedImage) return;
    const url = URL.createObjectURL(uploadedImage);
    setPreviewImageUrl(url);
    setImage(uploadedImage);
  };

  return (
    <Box w="full" borderRadius={10} py={8} px={28} bg="rgba(101,218,255,0.5)">
      <VStack spacing={6} textAlign="center">
        <Text
          color="white"
          fontSize={{ base: 'xl', sm: '2xl' }}
          fontWeight="bold"
        >
          パズル作成
        </Text>
        <InputImage
          id={'puzzle'}
          label="新規パズル作成"
          src={previewImageUrl}
          onChangeImage={handleImage}
        />
      </VStack>
    </Box>
  );
};
