'use client';

import React, { CSSProperties } from 'react';

const styles: CSSProperties = {
  position: 'absolute',
  width: '100px',
  height: '100px',
  backgroundColor: 'red',
};

export const Piece = () => {
  return <div style={styles}>Piece</div>;
};
