'use client';

import React, { useEffect } from 'react';
import { PuzzleContainer } from './PuzzleContainer';
import { InputMemoryContainer } from './InputMemoryContainer';
import { Box, Grid } from '@chakra-ui/react';
import { PuzzlePieceContainer } from './PuzzlePieceContainer';
import bg_img from '/public/bg_img.jpeg';
import { usePuzzle } from '../../hooks/usePuzzle';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/userState';

// import { set } from 'firebase/database';

export function ClientComponent() {
  const { id, name, roomId } = useRecoilValue(userState);
  const {
    puzzlePieces,
    myPieces,
    inputRef,
    picture,
    handleTimeout,
    handlePieceComplete,
    handleClickSendMemory,
    createListener,
    createPictureListener,
  } = usePuzzle({ id, name, room_id: roomId });

  // const picture: ImageInfo = {
  //   url: '/dummy/dummy2.jpg',
  //   width: 1280,
  //   height: 720,
  // };

  useEffect(() => {
    const listener = createListener();
    const pictureListener = createPictureListener();

    return () => {
      listener();
      pictureListener();
    };
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
            userPieces={myPieces}
            imageInfo={picture}
            handleComplete={handlePieceComplete}
          />
        </Grid>
      </Box>
    </>
  );
}
