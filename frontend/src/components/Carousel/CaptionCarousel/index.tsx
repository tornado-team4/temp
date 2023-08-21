'use client';

import { Box, Image, Text, VStack } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type CardType = {
  title: string;
  text: string;
  image: string;
};

type Props = {
  cards: CardType[];
  textColor?: string;
};

export function CaptionCarousel({ cards, textColor = 'black' }: Props) {
  return (
    <Box h="full" w="full">
      <Swiper
        spaceBetween={30}
        centeredSlides
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title}>
            <Box h="xs">
              <VStack gap={2}>
                <Image boxSize="150px" objectFit="cover" src={card.image} />
                <Text color={textColor}>{card.title}</Text>
                <Text color={textColor}>{card.text}</Text>
              </VStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
