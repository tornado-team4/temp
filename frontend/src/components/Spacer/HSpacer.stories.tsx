import type { Meta, StoryObj } from '@storybook/react';

import { Box, HStack } from '@chakra-ui/react';

import { HSpacer } from './index';

const meta: Meta<typeof HSpacer> = {
  title: 'Spacer/HSpacer',
  component: HSpacer,
};

export default meta;
type Story = StoryObj<typeof HSpacer>;

// FIXME: any 型の回避
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story = (args: any) => {
  return (
    <>
      <HStack>
        <Box w={5} h={14} bg="tomato" />
        <HSpacer {...args} />
        <Box w={5} h={14} bg="tomato" />
      </HStack>
    </>
  );
};

Default.args = {
  size: 10,
};
