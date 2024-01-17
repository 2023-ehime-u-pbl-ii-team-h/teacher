import type { Meta, StoryObj } from "@storybook/react";

import { FilledButton } from "./button";
import { MdAdd } from "react-icons/md";

export default {
  title: "atoms/button/filled",
  component: FilledButton,
} satisfies Meta<typeof FilledButton>;

type Story = StoryObj<typeof FilledButton>;

export const Normal: Story = {
  args: {
    label: "Lorem ipsum",
  },
};

export const WithIcon: Story = {
  args: {
    leadingIcon: <MdAdd />,
    label: "Lorem ipsum",
  },
};
