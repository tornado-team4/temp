import type { Meta, StoryObj } from '@storybook/react';

import { Box, VStack } from '@chakra-ui/react';

import { VSpacer } from './index';

const meta: Meta<typeof VSpacer> = {
  title: 'atoms/Spacer/VSpacer',
  component: VSpacer,
};

export default meta;
type Story = StoryObj<typeof VSpacer>;

// FIXME: any 型の回避
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story = (args: any) => {
  return (
    <>
      <VStack>
        <Box w={14} h={5} bg="tomato" />
        <VSpacer {...args} />
        <Box w={14} h={5} bg="tomato" />
      </VStack>
    </>
  );
};

Default.args = {
  size: 10,
};
