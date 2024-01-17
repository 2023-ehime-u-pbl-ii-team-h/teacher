import type { Meta, StoryObj } from "@storybook/react";

import { PlainTooltip } from "./tooltip";

export default {
  title: "atoms/tooltip/plain",
  component: PlainTooltip,
} satisfies Meta<typeof PlainTooltip>;

type Story = StoryObj<typeof PlainTooltip>;

export const Normal: Story = {
  args: {
    text: "Lorem ipsum",
  },
};
