import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const selectAllNotes = (state: RootState) => state.notes;
export const selectFilterNotes = (state: RootState) => state.filterNotes;

export const selectNotesByFilter = createSelector(
  [selectAllNotes, selectFilterNotes],
  (allNotes, filterNotes) => {
    if (filterNotes === "Active") {
      return allNotes.filter((notes) => !notes.archive);
    }
    if (filterNotes === "Archive") {
      return allNotes.filter((notes) => notes.archive);
    }
    return allNotes;
  }
);
