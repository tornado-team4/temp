'use client';

import React, { useState } from 'react';
import { MotionStyle, PanInfo, motion } from 'framer-motion';

type Props = {
  index: number;
  isCompleted?: boolean;
};

export const Piece = ({ index, isCompleted }: Props) => {
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
        setisComp(true);
      }
    }
  };

  const draggableArea =
    typeof window === 'object' ? document.getElementById(`dr-${index}`) : null;

  const createPieceStyle = (): MotionStyle => {
    const posX = (index % 6) * 16.6667;
    const posY = Math.floor(index / 6) * 25;

    return {
      position: 'fixed',
      width: 1280 / 6,
      height: 720 / 4,
      backgroundImage: 'url(/dummy/dummy1.jpg)',
      backgroundSize: 1280,
      backgroundPosition: `${posX}% ${posY}%`,
      top: 0,
      left: 0,
      // top: draggableArea ? draggableArea.offsetTop : 0,
      // left: draggableArea ? draggableArea.offsetLeft : 0,
    };
  };
  const pieceStyle: MotionStyle = createPieceStyle();

  return (
    <motion.div
      drag
      // dragSnapToOrigin
      dragConstraints={
        isComp
          ? {
              top: draggableArea ? draggableArea.offsetTop : 0,
              left: draggableArea ? draggableArea.offsetLeft : 0,
              right: draggableArea ? draggableArea.offsetLeft : 0,
              bottom: draggableArea ? draggableArea.offsetTop : 0,
            }
          : {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }
      }
      dragElastic={1}
      dragTransition={{ bounceStiffness: 150, bounceDamping: 15 }}
      whileHover={{ cursor: 'grabbing', boxShadow: '0 0 0 5px #fff219' }}
      whileTap={{ cursor: 'grabbing' }}
      whileDrag={{ scale: 1 }}
      style={pieceStyle}
      onDragEnd={handleDragEnd}
    />
  );
};
