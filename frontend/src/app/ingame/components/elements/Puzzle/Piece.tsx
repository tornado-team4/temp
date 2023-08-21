'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { log } from 'console';

type Props = {
  isCompleted?: boolean;
};

export const Piece = ({ isCompleted }: Props) => {
  log(isCompleted);
  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 12 }}
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 1 }}
      style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
      }}
    >
      aa
    </motion.div>
  );
};
