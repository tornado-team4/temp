'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import { CaptionCarousel } from '@/components/Carousel/CaptionCarousel';

type Props = {
  borderColor?: string;
  bgColor?: string;
  py?: number;
  px?: number;
};

export function HowToPlayArea({
  borderColor = '#FFF219',
  bgColor = 'whiteAlpha.50',
  py = 4,
  px = 20,
}: Props) {
  const cards = [
    {
      title: 'Design Projects 1',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
  ];

  return (
    <Box
      borderColor={borderColor}
      borderRadius="lg"
      bgColor={bgColor}
      borderWidth={1}
      py={py}
      px={px}
    >
      <VStack>
        <Text color="white" fontSize="2xl" fontWeight="bold">
          プレイ方法
        </Text>
        <CaptionCarousel cards={cards} textColor="white" />
      </VStack>
    </Box>
  );
}
