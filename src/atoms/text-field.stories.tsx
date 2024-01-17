import type { Meta, StoryObj } from "@storybook/react";

import { OutlinedTextField } from "./text-field";

export default {
  title: "atoms/text field/outlined",
  component: OutlinedTextField,
} satisfies Meta<typeof OutlinedTextField>;

type Story = StoryObj<typeof OutlinedTextField>;

export const Normal: Story = {
  args: {
    label: "Lorem ipsum",
  },
};

export const WithSupportingText: Story = {
  args: {
    label: "Lorem ipsum",
    supportingText: "Lorem ipsum",
  },
};
