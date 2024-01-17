import type { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "./list-item";

export default {
  title: "molecules/list item",
  component: ListItem,
} satisfies Meta<typeof ListItem>;

type Story = StoryObj<typeof ListItem>;

export const Normal: Story = {
  args: {
    checked: false,
    iconLabel: "TS",
    primaryLabel: "TEST Student",
    secondaryLabel: "test.student@example.com",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    iconLabel: "TS",
    primaryLabel: "TEST Student",
    secondaryLabel: "test.student@example.com",
  },
};
