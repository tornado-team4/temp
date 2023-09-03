'use client';

import type { ChangeEventHandler } from 'react';

import { Input } from '@chakra-ui/react';

type Props = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  borderColor: string;
  placeholder?: string;
};

export function InputName({
  value,
  onChange,
  borderColor,
  placeholder = '名前を入力',
}: Props) {
  return (
    <Input
      size="lg"
      variant="outline"
      bgColor="white"
      placeholder={placeholder}
      borderColor={borderColor}
      borderWidth="3px"
      borderRadius="xl"
      value={value}
      onChange={onChange}
    />
  );
}
