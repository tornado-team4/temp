'use client';

import { Center, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Piece } from '../elements/Puzzle/Piece';
import { ImageInfo } from '../../types/ImageInfo';
import { PuzzlePiece } from '../../types/PuzzlePiece';

type Props = {
  userPieces: PuzzlePiece[];
  imageInfo: ImageInfo;
  handleComplete: (index: number) => void;
};
export const PuzzlePieceContainer = ({
  userPieces,
  imageInfo,
  handleComplete,
}: Props) => {
  return (
    <Center height={100} bgColor="#D9D9D9">
      <Grid gap={4} templateColumns="repeat(4, 1fr)">
        {userPieces.length > 0 && (
          <>
            <GridItem>
              <Piece
                index={userPieces[0].id}
                handleComplete={handleComplete}
                imageInfo={imageInfo}
              />
            </GridItem>
            <GridItem>
              <Piece
                index={userPieces[1].id}
                handleComplete={handleComplete}
                imageInfo={imageInfo}
              />
            </GridItem>
            <GridItem>
              <Piece
                index={userPieces[2].id}
                handleComplete={handleComplete}
                imageInfo={imageInfo}
              />
            </GridItem>
            <GridItem>
              <Piece
                index={userPieces[3].id}
                handleComplete={handleComplete}
                imageInfo={imageInfo}
              />
            </GridItem>
          </>
        )}
      </Grid>
    </Center>
  );
};
