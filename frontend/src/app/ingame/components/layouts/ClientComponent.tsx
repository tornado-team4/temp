'use client';

import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { Box, Grid } from '@chakra-ui/react';

import { usePuzzle } from '@/app/ingame/hooks/usePuzzle';
import { userState } from '@/store/userState';
import { InputMemoryContainer } from '@/app/ingame/components/layouts/InputMemoryContainer';
import { PuzzleContainer } from '@/app/ingame/components/layouts/PuzzleContainer';
import { PuzzlePieceContainer } from '@/app/ingame/components/layouts/PuzzlePieceContainer';

import bg_img from '/public/bg_img.jpeg';

// import { set } from 'firebase/database';

export function ClientComponent() {
  const { id, name, roomId } = useRecoilValue(userState);
  const {
    puzzlePieces,
    myPieces,
    inputRef,
    picture,
    isSendMessage,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            isDisabled={isSendMessage}
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
