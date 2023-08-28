'use client';

import { Center, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Piece } from '../elements/Puzzle/Piece';
import { ImageInfo } from '../../types/ImageInfo';

type Props = {
  handleComplete: (index: number) => void;
  imageInfo: ImageInfo;
};
export const PuzzlePieceContainer = ({ handleComplete, imageInfo }: Props) => {
  return (
    <Center height={100} bgColor="#D9D9D9">
      <Grid gap={4} templateColumns="repeat(4, 1fr)">
        <GridItem>
          <Piece
            index={0}
            handleComplete={handleComplete}
            imageInfo={imageInfo}
          />
        </GridItem>
        <GridItem>
          <Piece
            index={3}
            handleComplete={handleComplete}
            imageInfo={imageInfo}
          />
        </GridItem>
        <GridItem>
          <Piece
            index={2}
            handleComplete={handleComplete}
            imageInfo={imageInfo}
          />
        </GridItem>
        <GridItem>
          <Piece
            index={4}
            handleComplete={handleComplete}
            imageInfo={imageInfo}
          />
        </GridItem>
      </Grid>
    </Center>
  );
};
