import { v4 as uuidv4 } from "uuid";

import { formatDateToYYYYMMDD } from "./formatDate";
import { dateRegex } from "../data/dataRegex";

export default class userNotesClass {
  constructor(userNotes) {
    this.allNotes = userNotes;
  }

  activeAllNotes() {
    return this.allNotes.filter((note) => !note.archive);
  }

  arhiveAllNotes() {
    return this.allNotes.filter((note) => note.archive);
  }

  summaryNotes() {
    return this.allNotes.reduce((acc, note) => {
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
  }

  addNewNote(name, content, category) {
    const dates = content.match(dateRegex);
    const newNotes = {
      id: uuidv4(),
      name: name,
      created: formatDateToYYYYMMDD(new Date()),
      category: category,
      content: content,
      dates: dates ? dates : "",
      archive: false,
    };

    this.allNotes = [newNotes, ...this.allNotes];
  }

  toggleArchiveNote(id) {
    this.allNotes = this.allNotes.map((note) => {
      if (note.id === id) {
        note.archive = !note.archive;
      }
      return note;
    });
  }

  editNote(id, name, content, category) {
    const dates = content.match(dateRegex);
    const deleteOldNote = this.allNotes.filter((note) => note.id !== id);
    const newNote = {
      id: uuidv4(),
      name: name,
      created: formatDateToYYYYMMDD(new Date()),
      category: category,
      content: content,
      dates: dates ? dates : "",
      archive: false,
    };
    this.allNotes = [newNote, ...deleteOldNote];
  }

  deleteNote(id) {
    this.allNotes = this.allNotes.filter((note) => note.id !== id);
  }
}
