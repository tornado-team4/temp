import { Button } from '@chakra-ui/react';
import { ReactElement } from 'react';

type Props = {
  text: string;
  rightIcon: ReactElement;
  color: string;
  bgColor: string;
  borderWidth?: string;
};

export function OutlineButtonWithRightIcon({
  text,
  rightIcon,
  color,
  bgColor,
  borderWidth = '3px',
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
    >
      {text}
    </Button>
  );
}
