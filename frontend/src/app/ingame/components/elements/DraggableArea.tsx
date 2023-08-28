import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { ImageInfo } from '../../types/ImageInfo';

type Props = {
  index: number;
  isComplete: boolean;
  imageInfo: ImageInfo;
};

export const DraggableArea = ({ index, isComplete, imageInfo }: Props) => {
  // const posX = (index % 6) * 16.666;
  // const posY = Math.floor(index / 6) * 25;
  const posX = -((index % 6) * imageInfo.width) / 6;
  const posY = -(Math.floor(index / 6) * imageInfo.height) / 4;

  return (
    <Box
      id={`dr-${index}`}
      width={imageInfo.width / 6}
      height={imageInfo.height / 4}
    >
      <AnimatePresence>
        {isComplete && (
          <Box
            as={motion.div}
            width={imageInfo.width / 6}
            height={imageInfo.height / 4}
            bgSize={imageInfo.width}
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
