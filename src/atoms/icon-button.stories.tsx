import type { Meta, StoryObj } from "@storybook/react";

import { StandardIconButton } from "./icon-button";
import { MdAdd } from "react-icons/md";

export default {
  title: "atoms/icon button/standard",
  component: StandardIconButton,
} satisfies Meta<typeof StandardIconButton>;

type Story = StoryObj<typeof StandardIconButton>;

export const Normal: Story = {
  args: {
    icon: <MdAdd />,
    alt: "",
  },
};

export const WithTooltip: Story = {
  args: {
    icon: <MdAdd />,
    alt: "Add item",
  },
};
