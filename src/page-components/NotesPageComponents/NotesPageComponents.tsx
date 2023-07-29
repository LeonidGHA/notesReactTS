import { FC } from "react";

import { AllNotesList } from "src/components/AllNotesList/AllNotesList";
import useAppSelector from "src/hooks/useAppSelector";
import { selectNotesByFilter } from "src/redux/notes/notes-selectors";

export const NotesPageComponents: FC = () => {
  const userNotes = useAppSelector(selectNotesByFilter);

  return (
    <>
      <AllNotesList userNotes={userNotes} />
    </>
  );
};
