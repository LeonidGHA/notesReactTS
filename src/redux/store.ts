import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./notes/notes-slice";
import filterReducer from "./filter/filter-slice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    filterNotes: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
