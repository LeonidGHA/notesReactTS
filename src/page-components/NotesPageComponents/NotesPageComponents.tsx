import { FC } from "react";

import { AllNotesList } from "src/components/AllNotesList/AllNotesList";
import { FilrersNotes } from "src/components/FilrerNotes";
import { Button } from "src/ui-kit/Button";
import { Modal } from "src/ui-kit/Modal/Modal";

import { useAppSelector } from "src/hooks/useAppSelector";
import { useToggleOpenModal } from "src/hooks/useToggleOpenModal";

import { selectNotesByFilter } from "src/redux/notes/notes-selectors";

export const NotesPageComponents: FC = () => {
  const userNotes = useAppSelector(selectNotesByFilter);
  const { isOpen, toggleOpen } = useToggleOpenModal();
  console.log(isOpen);
  return (
    <>
      <FilrersNotes />
      <AllNotesList userNotes={userNotes} />
      <Button
        className="flex justify-center px-4 py-2 w-full max-w-[140px] ml-auto bg-slate-300 rounded mb-10"
        onClick={toggleOpen}
      >
        Create Notes
      </Button>

      {isOpen && (
        <Modal onClick={toggleOpen}>
          <div>Hello</div>
        </Modal>
      )}
    </>
  );
};
