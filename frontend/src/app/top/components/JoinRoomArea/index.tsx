'use client';

import {
  Box,
  Center,
  HStack,
  Icon,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { BiSolidRightArrow } from 'react-icons/bi';
import { Avatar } from '@/app/top/components/Avatar';
import { OutlineButtonWithRightIcon } from '@/components/Button/OutlineButtonWithRightIcon';
import { InputName } from '@/components/Input/Name';
import { useJoinRoomArea } from '../hooks/useJoinRoomArea';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { VSpacer } from '@/components/Spacer';

type Props = {
  roomId: string;
};

export function JoinRoomArea({ roomId }: Props) {
  const {
    name,
    setName,
    onCreateRoomHandler,
    onJoinRoomHandler,
    avatar,
    setAvatar,
    avatarList,
  } = useJoinRoomArea();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const url =
    'https://jp.freepik.com/free-vector/flat-lovely-animal-avatar-collection_845660.htm#query=アバター動物&position=2&from_view=keyword&track=ais';

  const handleJoinRoom = async () => {
    if (roomId === '') {
      await onCreateRoomHandler();
    } else {
      await onJoinRoomHandler(roomId);
    }

    // ここに非同期処理が完了した後の状態更新などを追加
  };

  return (
    <Box w="full" bgColor="#65DAFF" borderRadius="lg" py={8} px={28}>
      <VStack spacing={6} textAlign="center">
        <Text color="white" fontSize="2xl" fontWeight="bold">
          自分のアバターを設定してください
        </Text>
        <HStack alignItems="flex-end">
          <Avatar
            avatarList={avatarList}
            avatarUrl={avatar}
            setAvatarUrl={setAvatar}
          />
          <Icon
            as={InfoOutlineIcon}
            boxSize={6}
            _hover={{ cursor: 'pointer' }}
            onClick={onOpen}
          />
        </HStack>
        <InputName
          borderColor="#56C1FC"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box w="60%">
          <OutlineButtonWithRightIcon
            text="参加"
            rightIcon={<BiSolidRightArrow />}
            color="#56C1FC"
            bgColor="white"
            isDisabled={name === ''}
            onClick={handleJoinRoom}
          />
        </Box>
      </VStack>

      {/* アイコンの著作権に関するモーダル */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <HStack>
                <VSpacer size={12} />
                <Text>アバターアイコンの著作権：</Text>
                {/* NOTE: ローカルだと 403 が返ってくるが、デプロイ環境では正常に動く */}
                <Link href={url} isExternal>
                  Freepik
                </Link>
                <VSpacer size={12} />
              </HStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
