'use client';

import React, { useEffect } from 'react';
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
    createListener,
  } = usePuzzle();

  const picture: ImageInfo = {
    url: '/dummy/dummy2.jpg',
    width: 1280,
    height: 720,
  };

  useEffect(() => {
    const listener = createListener();

    return () => listener();
  }, []);

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
