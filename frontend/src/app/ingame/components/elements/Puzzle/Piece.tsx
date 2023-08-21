'use client';

import React, { useState } from 'react';
import { PanInfo, motion } from 'framer-motion';

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

  const createPieceStyle = (): React.CSSProperties => {
    const posX = (index % 6) * 16.6667;
    const posY = Math.floor(index / 6) * 25;

    const draggableArea = document.getElementById(`dr-${index}`);

    return {
      position: isComp ? 'fixed' : 'relative',
      width: 1280 / 6,
      height: 720 / 4,
      backgroundImage: 'url(/dummy/dummy1.jpg)',
      backgroundSize: 1280,
      backgroundPosition: `${posX}% ${posY}%`,
      top: draggableArea ? draggableArea.offsetTop : 0,
      left: draggableArea ? draggableArea.offsetLeft : 0,
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
      animate={isComp ? { scale: 1 } : { scale: 1 }}
      transition={{ duration: 0.2 }}
      style={pieceStyle}
      onDragEnd={handleDragEnd}
    />
  );
};
