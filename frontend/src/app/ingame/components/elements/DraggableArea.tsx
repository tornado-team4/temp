import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  index: number;
};

export const DraggableArea = ({ index }: Props) => {
  return <Box height={178} id={`dr-${index}`} />;
};
