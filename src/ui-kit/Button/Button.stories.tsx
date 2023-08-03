import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    className: {
      control: {
        type: null,
      },
      description: "You can add your custom styles here",
    },
    type: {
      description: "Select the button type",
    },
    onClick: {
      type: "function",
      description: "Perform the action when you press",
    },
    borderRadius: {
      type: "boolean",
      description: "Add this field if you need rounded edges",
    },
    size: {
      description:
        "Add the size of your button by selecting from the available options",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "string",
  },
};

export const MediumButton: Story = {
  args: {
    children: "large button",
    size: "medium",
    borderRadius: true,
    type: "button",
  },
};
export const LargeButton: Story = {
  args: {
    children: "large button",
    size: "large",
    borderRadius: true,
    type: "button",
  },
};

export const FullSizeButton: Story = {
  args: {
    children: "large button",
    size: "full",
    type: "button",
  },
};
