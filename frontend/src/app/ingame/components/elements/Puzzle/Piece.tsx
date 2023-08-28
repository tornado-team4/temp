'use client';

import React, { useState } from 'react';
import { AnimatePresence, PanInfo, motion } from 'framer-motion';

type Props = {
  index: number;
  isCompleted?: boolean;
  handleComplete: () => void;
};

export const Piece = ({ index, isCompleted, handleComplete }: Props) => {
  if (index === 0 && isCompleted === true) {
    console.log(1);
  }

  const [isComp, setisComp] = useState(false);

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    const draggableArea = document.getElementById(`dr-${index}`);
    if (draggableArea) {
      const isOver =
        info.point.x > draggableArea.offsetLeft &&
        info.point.x < draggableArea.offsetLeft + draggableArea.offsetWidth &&
        info.point.y > draggableArea.offsetTop &&
        info.point.y < draggableArea.offsetTop + draggableArea.offsetHeight;
      if (isOver) {
        handleComplete();
        setisComp(true);
      }
    }
  };

  const posX = (index % 6) * 16.6667;
  const posY = Math.floor(index / 6) * 25;

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
            width: 1280 / 6,
            height: 720 / 4,
            backgroundImage: 'url(/dummy/dummy1.jpg)',
            backgroundSize: 1280,
            backgroundPosition: `${posX}% ${posY}%`,
          }}
          onDragEnd={handleDragEnd}
        />
      )}
    </AnimatePresence>
  );
};
