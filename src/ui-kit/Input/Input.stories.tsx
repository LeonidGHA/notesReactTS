import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    classNameInput: {
      control: {
        type: null,
      },
      description: "You can add your custom styles here",
    },
    classNameLabel: {
      control: {
        type: null,
      },
      description: "You can add your custom styles here",
    },
    handleChange: {
      type: "function",
      description: "Perform the action when you change field.",
      action: "onChange",
    },
    placeholder: {
      type: "string",
      description: "You can change the placeholder text here",
    },
    required: {
      type: "boolean",
      description: "must be specified if this field is required",
    },
    name: {
      type: "string",
      description: "Specify a name to indicate the name of the institute",
    },
    value: {
      type: "string",
      descrtiptions: "",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputlWithHooks = () => {
  const [valueInput, setValueInput] = useState("");

  return (
    <Input
      value={valueInput}
      name="text"
      handleChange={(e) => {
        setValueInput(e.target.value);
      }}
    />
  );
};

export const DefaultInput: Story = {
  args: {
    name: "text",
    value: "",
  },
  render: () => <InputlWithHooks />,
};
