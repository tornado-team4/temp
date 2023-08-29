import { Button } from '@chakra-ui/react';
import type { ReactElement } from 'react';

type Props = {
  text: string;
  rightIcon: ReactElement;
  color: string;
  bgColor: string;
  borderWidth?: string;
  maxW?: string;
  isDisabled: boolean;
  onClick?: () => void;
};

export function OutlineButtonWithRightIcon({
  text,
  rightIcon,
  color,
  bgColor,
  borderWidth = '3px',
  maxW = '1000px',
  isDisabled,
  onClick,
}: Props) {
  return (
    <Button
      w="full"
      size="lg"
      rightIcon={rightIcon}
      color={color}
      borderWidth={borderWidth}
      borderColor={color}
      borderRadius="2xl"
      variant="outline"
      backgroundColor={bgColor}
      maxW={maxW}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
