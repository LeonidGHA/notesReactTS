import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUserNote } from "src/types/commonTypes.ts";
import { userNotes } from "src/data/userNotes.ts";

const initialNotesReduxState: IUserNote[] = userNotes;

const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotesReduxState,
  reducers: {
    removeNote: (store, { payload }: PayloadAction<string>) => {
      store.filter((note) => note.id !== payload);
    },
  },
});

export default notesSlice.reducer;

export const { removeNote } = notesSlice.actions;
