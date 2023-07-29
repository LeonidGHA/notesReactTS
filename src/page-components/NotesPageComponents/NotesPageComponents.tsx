import { FC } from "react";

import { AllNotesList } from "src/components/AllNotesList/AllNotesList";
import { FilrersNotes } from "src/components/FilrerNotes";

import { useAppSelector } from "src/hooks/useAppSelector";
import { selectNotesByFilter } from "src/redux/notes/notes-selectors";

export const NotesPageComponents: FC = () => {
  const userNotes = useAppSelector(selectNotesByFilter);

  return (
    <>
      <FilrersNotes />
      <AllNotesList userNotes={userNotes} />
    </>
  );
};
