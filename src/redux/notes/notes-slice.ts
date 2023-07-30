import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { formatDateToYYYYMMDD } from "src/utils/formatDate";
import { dateRegex } from "src/data/dataRegex";

import { IUserNote, IDataNoteForm } from "src/types/commonTypes.ts";
import { userNotes } from "src/data/userNotes.ts";

const initialNotesReduxState: IUserNote[] = userNotes;

const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotesReduxState,
  reducers: {
    addNote: {
      reducer: (state, { payload }: PayloadAction<IUserNote>) => {
        return [payload, ...state];
      },
      prepare: (data: IDataNoteForm) => {
        const dates = data.content.match(dateRegex);
        return {
          payload: {
            ...data,
            created: formatDateToYYYYMMDD(new Date()),
            id: uuidv4(),
            dates: dates ? dates.join(", ") : "",
            archive: false,
          },
        };
      },
    },
    editNote: {
      reducer: (state, { payload }: PayloadAction<IUserNote>) => {
        const newState = state.filter((note) => note.id !== payload.id);
        return [payload, ...newState];
      },
      prepare: (data: IDataNoteForm, id: string) => {
        const dates = data.content.match(dateRegex);
        return {
          payload: {
            ...data,
            created: formatDateToYYYYMMDD(new Date()),
            id: id,
            dates: dates ? dates.join(", ") : "",
            archive: false,
          },
        };
      },
    },
    removeNote: (store, { payload }: PayloadAction<string>) => {
      store.filter((note) => note.id !== payload);
    },
  },
});

export default notesSlice.reducer;

export const { removeNote, addNote, editNote } = notesSlice.actions;
