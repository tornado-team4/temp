import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type Props = {
  index: number;
  isComplete: boolean;
};

export const DraggableArea = ({ index, isComplete }: Props) => {
  // const posX = (index % 6) * 16.666;
  // const posY = Math.floor(index / 6) * 25;
  const posX = -((index % 6) * 1280) / 6;
  const posY = -(Math.floor(index / 6) * 720) / 4;

  return (
    <Box id={`dr-${index}`} width={1280 / 6} height={720 / 4}>
      <AnimatePresence>
        {isComplete && (
          <Box
            as={motion.div}
            width={1280 / 6}
            height={720 / 4}
            bgSize={1280}
            bgImage={isComplete ? 'url(/dummy/hd2.jpg)' : undefined}
            bgPosition={`${posX}px ${posY}px`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};
