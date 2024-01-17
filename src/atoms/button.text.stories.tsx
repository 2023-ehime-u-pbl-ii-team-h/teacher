import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "./button";
import { MdAdd } from "react-icons/md";

export default {
  title: "atoms/button/text",
  component: TextButton,
} satisfies Meta<typeof TextButton>;

type Story = StoryObj<typeof TextButton>;

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
