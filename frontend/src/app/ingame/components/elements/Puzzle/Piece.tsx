'use client';

import React from 'react';
import { PanInfo, motion } from 'framer-motion';

type Props = {
  index: number;
  isCompleted?: boolean;
};

export const Piece = ({ index, isCompleted }: Props) => {
  if (index === 0 && isCompleted === true) {
    console.log(1);
  }

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    const draggableArea = document.getElementById(`dr-${index}`);
    if (draggableArea) {
      const isOver =
        info.point.x > draggableArea.offsetLeft &&
        info.point.x < draggableArea.offsetLeft + draggableArea.offsetWidth &&
        info.point.y > draggableArea.offsetTop &&
        info.point.y < draggableArea.offsetTop + draggableArea.offsetHeight;
      if (isOver) {
        console.log('over');
      }
    }
  };

  const createPieceStyle = (): React.CSSProperties => {
    const posX = (index % 8) * 12.5;
    const posY = Math.floor(index / 8) * 33;

    return {
      backgroundColor: 'red',
      position: 'relative',
      width: 1280 / 6,
      height: 720 / 4,
      backgroundImage: 'url(/dummy/dummy2.jpg)',
      backgroundSize: 1280,
      backgroundPosition: `${posX}% ${posY}%`,
    };
  };
  const pieceStyle: React.CSSProperties = createPieceStyle();

  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={1}
      dragTransition={{ bounceStiffness: 150, bounceDamping: 15 }}
      whileHover={{ cursor: 'grabbing' }}
      whileTap={{ cursor: 'grabbing' }}
      whileDrag={{ scale: 1 }}
      style={pieceStyle}
      onDragEnd={handleDragEnd}
    />
  );
};
