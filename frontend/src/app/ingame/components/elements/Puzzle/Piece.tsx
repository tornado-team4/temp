'use client';

import React, { useState } from 'react';
import { AnimatePresence, PanInfo, motion } from 'framer-motion';
import { ImageInfo } from '@/app/ingame/types/ImageInfo';

type Props = {
  index: number;
  handleComplete: (index: number) => void;
  imageInfo: ImageInfo;
};

export const Piece = ({ index, handleComplete, imageInfo }: Props) => {
  const [isComp, setIsComp] = useState(false);

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    const draggableArea = document.getElementById(`dr-${index}`);
    if (draggableArea) {
      const isOver =
        info.point.x > draggableArea.offsetLeft &&
        info.point.x < draggableArea.offsetLeft + draggableArea.offsetWidth &&
        info.point.y > draggableArea.offsetTop &&
        info.point.y < draggableArea.offsetTop + draggableArea.offsetHeight;
      if (isOver) {
        handleComplete(index);
        setIsComp(true);
      }
    }
  };

  const posX = -((index % 6) * imageInfo.width) / 6;
  const posY = -(Math.floor(index / 6) * imageInfo.height) / 4;

  return (
    <AnimatePresence>
      {!isComp && (
        <motion.div
          drag
          dragSnapToOrigin={isComp ? false : true}
          dragElastic={1}
          dragTransition={{ bounceStiffness: 150, bounceDamping: 15 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ cursor: 'grabbing', boxShadow: '0 0 0 5px #fff219' }}
          whileTap={{ cursor: 'grabbing' }}
          whileDrag={{ scale: 1 }}
          style={{
            width: imageInfo.width / 6,
            height: imageInfo.height / 4,
            backgroundImage: `url(${imageInfo.url})`,
            backgroundSize: imageInfo.width,
            backgroundPosition: `${posX}px ${posY}px`,
          }}
          onDragEnd={handleDragEnd}
        />
      )}
    </AnimatePresence>
  );
};
