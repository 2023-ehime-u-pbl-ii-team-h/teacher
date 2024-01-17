import type { Meta, StoryObj } from "@storybook/react";

import { ExtendedFAB } from "./floating-action-button";
import { MdAdd } from "react-icons/md";

export default {
  title: "atoms/floating action button/extended",
  component: ExtendedFAB,
} satisfies Meta<typeof ExtendedFAB>;

type Story = StoryObj<typeof ExtendedFAB>;

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
