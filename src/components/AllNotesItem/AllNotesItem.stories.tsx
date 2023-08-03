import type { Meta, StoryObj } from "@storybook/react";

import { AllNotesItem } from "./AllNotesItem";
import { Provider } from "react-redux";
import { store } from "src/redux/store";

const meta = {
  title: "UI/AllNotesItem",
  component: AllNotesItem,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
} satisfies Meta<typeof AllNotesItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    note: {
      id: "8",
      name: "Fitness Goals",
      created: "07-23-2023",
      category: "Task",
      content: "start jogging, do yoga",
      dates: "",
      archive: false,
    },
  },
};
