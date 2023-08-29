'use client';

import { Box, HStack, Image } from '@chakra-ui/react';
import bg_img from '/public/bg_img.jpeg';
import { Comment } from '@/types/Comment';
import { CommentList } from '@/app/complete/components/CommentList';
import { OutlineButtonWithRightIcon } from '@/components/Button/OutlineButtonWithRightIcon';
import { BsHouse } from 'react-icons/bs';
import { BiSolidRightArrow } from 'react-icons/bi';
import { HSpacer, VSpacer } from '@/components/Spacer';

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
  onClickEdit,
}: Props) => {
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
          <Image margin="auto" src={imageUrl} alt="Complete Puzzle" />
          <VSpacer size={12} />
          <HStack justifyContent="center">
            <OutlineButtonWithRightIcon
              text="ホームに戻る"
              rightIcon={<BsHouse />}
              color="#56C1FC"
              bgColor="white"
              maxW="200px"
              onClick={onClickBackHome}
            />
            <HSpacer size={8} />
            <OutlineButtonWithRightIcon
              text="編集する"
              rightIcon={<BiSolidRightArrow />}
              color="#56C1FC"
              bgColor="white"
              maxW="200px"
              onClick={onClickEdit}
            />
          </HStack>
        </Box>
        <Box h="100%" w="50%">
          <CommentList commentList={commentList} />
        </Box>
      </HStack>
    </Box>
  );
};
