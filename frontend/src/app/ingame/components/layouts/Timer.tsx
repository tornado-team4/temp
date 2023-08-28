'use client';
import { Box } from '@chakra-ui/react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const Timer = () => {
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
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Box>
  );
};
