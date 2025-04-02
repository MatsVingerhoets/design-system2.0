import type { Meta, StoryObj } from '@storybook/react';

import ClientCard from './ClientCard';
import { expect, userEvent, within } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/ClientCard',
  component: ClientCard,
  argTypes: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use fn to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ClientCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
};


export const rendersClient = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(await canvas.findByLabelText("listbox-button"));

    const option = await within(document.body).findByText("user1@example.com");
    await userEvent.click(option);
    await expect(canvas.getByText("550e8400-e29b-41d4-a716-446655440000")).toBeInTheDocument()
  }
};

