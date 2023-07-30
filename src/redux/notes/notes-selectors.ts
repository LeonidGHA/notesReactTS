import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { ISummaryNote } from "src/types/commonTypes";

import { selectFilterNotes } from "../filter/filter-selectors";

export const selectAllNotes = (state: RootState) => state.notes;

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

export const summaryNotesData = createSelector([selectAllNotes], (allNotes) => {
  const summaryNotes = allNotes.reduce((acc: ISummaryNote[], note) => {
    const indexSummaryNote = acc.findIndex(
      (el) => el.category === note.category
    );

    if (indexSummaryNote === -1) {
      if (note.archive) {
        acc.push({ category: note.category, active: 0, archive: 1 });
        return acc;
      }
      acc.push({ category: note.category, active: 1, archive: 0 });
      return acc;
    }

    if (note.archive) {
      acc[indexSummaryNote].archive += 1;
      return acc;
    }
    acc[indexSummaryNote].active += 1;
    return acc;
  }, []);
  return summaryNotes;
});
