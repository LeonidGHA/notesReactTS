import { FC, useState } from "react";

import { AllNotesList } from "src/components/AllNotesList/AllNotesList";
import { FilrersNotes } from "src/components/FilrerNotes";
import { SummaryNotesList } from "src/components/SummaryNotesList";
import { FormNote } from "src/components/forms/FormNote";
import { Button } from "src/ui-kit/Button";
import { Modal } from "src/ui-kit/Modal/Modal";

import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useToggleOpenModal } from "src/hooks/useToggleOpenModal";

import { addNote, editNote } from "src/redux/notes/notes-slice";

import {
  selectNotesByFilter,
  summaryNotesData,
} from "src/redux/notes/notes-selectors";

import { IDataNoteForm } from "src/types/commonTypes";

export const NotesPageComponents: FC = () => {
  const dispatch = useAppDispatch();
  const userNotes = useAppSelector(selectNotesByFilter);
  const summaryNotes = useAppSelector(summaryNotesData);
  const { isOpen, toggleOpen } = useToggleOpenModal();
  const [noteId, setNoteId] = useState<string | null>(null);

  const onSubmitForm = (data: IDataNoteForm) => {
    if (noteId) {
      dispatch(editNote(data, noteId));
      setNoteId(null);
      toggleOpen();
      return;
    }
    dispatch(addNote(data));
    toggleOpen();
  };

  const getNoteId = (id: string) => {
    setNoteId(id);
  };

  return (
    <>
      <FilrersNotes />
      <AllNotesList
        userNotes={userNotes}
        openModal={toggleOpen}
        getNoteId={getNoteId}
      />
      <Button
        className=" ml-auto  rounded mb-10"
        size="medium"
        onClick={toggleOpen}
      >
        Create Notes
      </Button>
      <SummaryNotesList summaryNotes={summaryNotes} />

      {isOpen && (
        <Modal onClick={toggleOpen}>
          <FormNote onSubmit={onSubmitForm} />
        </Modal>
      )}
    </>
  );
};
