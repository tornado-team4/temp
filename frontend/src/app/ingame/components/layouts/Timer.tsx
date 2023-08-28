'use client';
import { Box, Text } from '@chakra-ui/react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type Props = {
  onComplete: (totalElapsedTime: number) => void;
};

export const Timer = ({ onComplete }: Props) => {
  return (
    <Box
      style={{
        position: 'fixed',
        right: 48,
        top: 48,
      }}
    >
      <CountdownCircleTimer
        isPlaying
        duration={8}
        colors={['#004777', '#f7b801', '#A30000', '#ff6363']}
        colorsTime={[9, 8, 7, 6]}
        size={120}
        onComplete={onComplete}
      >
        {({ remainingTime }) => (
          <Text fontSize="4xl" fontWeight="bold">
            {remainingTime}
          </Text>
        )}
      </CountdownCircleTimer>
    </Box>
  );
};
