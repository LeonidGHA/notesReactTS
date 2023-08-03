import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "src/redux/store";

import { AllNotesList } from "./AllNotesList";
import { userNotes } from "src/data/userNotes";

const meta = {
  title: "UI/AllNotesList",
  component: AllNotesList,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
} satisfies Meta<typeof AllNotesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userNotes: [
      {
        id: "8",
        name: "Fitness Goals",
        created: "07-23-2023",
        category: "Task",
        content: "start jogging, do yoga",
        dates: "",
        archive: false,
      },
    ],
  },
};

export const List: Story = {
  args: {
    userNotes: userNotes,
  },
};
