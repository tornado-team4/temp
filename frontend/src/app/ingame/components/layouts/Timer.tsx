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
        duration={180}
        colors={['#6ef4e1', '#8AC926', '#ffca3a', '#ff7579']}
        colorsTime={[180, 120, 60, 0]}
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
