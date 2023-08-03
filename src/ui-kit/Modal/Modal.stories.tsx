import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

import { useToggleOpenModal } from "src/hooks/useToggleOpenModal";
import { Button } from "../Button/Button";

const meta = {
  title: "UI/Modal",
  component: Modal,
  argTypes: {
    classNameModal: {
      description: "You can add your custom styles here",
    },
    children: {
      description: "You can add your JSX.element or string here",
    },
    onClick: {
      type: "function",
      description: "Function that uses toggle to close and open a modal window",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithHooks = () => {
  const { isOpen, toggleOpen } = useToggleOpenModal();

  return (
    <>
      {isOpen && (
        <Modal onClick={toggleOpen}>This can be your JSX or text</Modal>
      )}
      <Button onClick={toggleOpen}>openModal</Button>
    </>
  );
};

export const DefaultModal: Story = {
  render: () => <ModalWithHooks />,
};
