'use client';
import { useEffect, useState } from 'react';
import { BsHouse } from 'react-icons/bs';

import { Box, HStack, Image as ChakraImage } from '@chakra-ui/react';

import bg_img from '/public/bg_img.jpeg';

import { CommentList } from '@/app/complete/components/CommentList';
import { OutlineButtonWithRightIcon } from '@/components/Button/OutlineButtonWithRightIcon';
// import { BiSolidRightArrow } from 'react-icons/bi';
import { /*  HSpacer, */ VSpacer } from '@/components/Spacer';
import { Comment } from '@/types/Comment';

type Props = {
  imageUrl: string;
  commentList: Comment[];
  onClickBackHome: () => void;
  onClickEdit: () => void;
};

export const CompletePage = ({
  imageUrl,
  commentList,
  onClickBackHome,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClickEdit,
}: Props) => {
  const [imageSize, setImageSize] = useState({
    width: '500px',
    height: '500px',
  });

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      const tempWidth = img.width;
      const tempHeight = img.height;
      const ratio =
        tempWidth < tempHeight
          ? tempWidth / tempHeight
          : tempHeight / tempWidth;

      if (tempWidth < tempHeight) {
        const newHeight = 600 < tempHeight ? 600 : tempHeight;
        const newWidth = Math.round(newHeight * ratio);
        setImageSize({
          width: `${newWidth}px`,
          height: `${newHeight}px`,
        });
      } else {
        const newWidth = 600 < tempWidth ? 600 : tempWidth;
        const newHeight = Math.round(newWidth * ratio);
        setImageSize({
          width: `${newWidth}px`,
          height: `${newHeight}px`,
        });
      }
    };
  }, [imageUrl]);

  console.log('imageSize', imageSize);

  return (
    <Box
      w="full"
      h="full"
      minH="100vh"
      bgImage={bg_img.src}
      objectFit="cover"
      p={8}
    >
      {/* NOTE: 100vh とするとスクロールバーが出てしまうため微調整 */}
      <HStack minH="90vh">
        <Box h="100%" w="50%">
          <ChakraImage
            h={imageSize.height}
            w={imageSize.width}
            margin="auto"
            src={imageUrl}
            alt="Complete Puzzle"
          />
          <VSpacer size={12} />
          <HStack justifyContent="center">
            <OutlineButtonWithRightIcon
              text="ホームに戻る"
              rightIcon={<BsHouse />}
              color="#56C1FC"
              bgColor="white"
              maxW="200px"
              isDisabled={false}
              onClick={onClickBackHome}
            />
            {/* <HSpacer size={8} />
            <OutlineButtonWithRightIcon
              text="編集する"
              rightIcon={<BiSolidRightArrow />}
              color="#56C1FC"
              bgColor="white"
              maxW="200px"
              isDisabled={false}
              onClick={onClickEdit}
            /> */}
          </HStack>
        </Box>
        <Box h="100%" w="50%">
          <CommentList commentList={commentList} />
        </Box>
      </HStack>
    </Box>
  );
};
