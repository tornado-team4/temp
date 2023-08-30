'use client';

import React from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import { Box, Grid } from '@chakra-ui/react';
import { PuzzlePieceContainer } from './PuzzlePieceContainer';
import bg_img from '/public/bg_img.jpeg';
import { ImageInfo } from '../../types/ImageInfo';
import { usePuzzle } from '../../hooks/usePuzzle';
// import { set } from 'firebase/database';

export function ClientComponent() {
  const {
    puzzlePieces,
    userPieces,
    inputRef,
    handleTimeout,
    handlePieceComplete,
    handleClickSendMemory,
  } = usePuzzle();

  const picture: ImageInfo = {
    url: '/dummy/hd2.jpg',
    width: 1280,
    height: 720,
  };

  return (
    <>
      <Box
        w="full"
        h="full"
        minH="100vh"
        bgImage={bg_img.src}
        objectFit="cover"
        p={8}
      >
        <PuzzleContainer
          onComplete={handleTimeout}
          puzzlePieces={puzzlePieces}
          imageInfo={picture}
        />
        <Grid
          templateColumns="5fr 7fr"
          position="fixed"
          bottom="0"
          left={0}
          right={0}
          gap={0}
        >
          <InputMemoryContainer
            inputRef={inputRef}
            onClick={handleClickSendMemory}
          />
          <PuzzlePieceContainer
            userPieces={userPieces}
            imageInfo={picture}
            handleComplete={handlePieceComplete}
          />
        </Grid>
      </Box>
    </>
  );
}
