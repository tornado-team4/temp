// OutlineButtonWithRightIcon.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { BiSolidRightArrow } from 'react-icons/bi';

import { OutlineButtonWithRightIcon } from './index';

const meta: Meta<typeof OutlineButtonWithRightIcon> = {
  title: 'Button/OutlineWithRightIcon',
  component: OutlineButtonWithRightIcon,
};

export default meta;
type Story = StoryObj<typeof OutlineButtonWithRightIcon>;

export const Default: Story = {
  args: {
    text: '参加する',
    rightIcon: <BiSolidRightArrow />,
    color: '#56C1FC',
  },
};
