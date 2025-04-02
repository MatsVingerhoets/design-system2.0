
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';
import { MdCheck, MdClose } from 'react-icons/md';

const ICONS = {
  'no icon': null,
  MdCheck,
  MdClose,
};
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    pseudo: { hover: true, focus: true, active: true },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["primary", 'secondary', 'tertiary', 'white']
    },
    style: {
      control: "inline-radio",
      options: ["filled", 'outline', 'borderless']
    },
    iconLeft: {
      control: "select",
      options: Object.keys(ICONS),
      mapping: ICONS
    },
    iconRight: {
      control: "select",
      options: Object.keys(ICONS),
      mapping: ICONS
    }
  },
  // Use fn to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    style: 'filled',
    children: "Button",
    color: "primary"
  },
};
