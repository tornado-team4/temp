'use client';

import { Box, Text, VStack } from '@chakra-ui/react';

import { CaptionCarousel } from '@/components/Carousel/CaptionCarousel';

import image1 from '/public/howToPlayImages/img1.png';
import image2 from '/public/howToPlayImages/img2.png';
import image3 from '/public/howToPlayImages/img3.png';
import image4 from '/public/howToPlayImages/img4.png';
import image5 from '/public/howToPlayImages/img5.png';

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
      title: '1.アバターの設定をしよう',
      text: 'アバターを設定して自分の個性を表現しよう',
      image: image1.src,
    },
    {
      title: '2.思い出の写真を登録しよう',
      text: '思い出の写真を選ぶ中で青春を振り返ってみよう',
      image: image2.src,
    },
    {
      title: '3.思い出のメッセージをひとこと送ろう',
      text: 'ひとことの思い出メッセージでパズルピースを手に入れることができるよ',
      image: image3.src,
    },
    {
      title: '4.パズルを解こう',
      text: 'パズルができていく過程で青春を取り戻す感覚を一緒に感じませんか？',
      image: image4.src,
    },
    {
      title: '5.アルバムを見てみよう',
      text: 'アルバムであの青春の瞬間を思い出すとともに、今この瞬間も新たな青春の1ピースになるはず!',
      image: image5.src,
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
