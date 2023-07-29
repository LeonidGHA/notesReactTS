import { summaryNotesItem } from "../summaryNotesItem/summaryNotesItem";

export const summaryNotesList = (element, arhchiveNotes) => {
  const markup = arhchiveNotes
    .map((note) => {
      return summaryNotesItem(note);
    })
    .join("");

  element.innerHTML = `<li class=" grid grid-cols-3 gap-4 bg-slate-400 p-5 rounded ">
            <span class="pl-10">Note Category</span>
            <span class="text-center">Active</span>
            <span class="text-center">Archived</span>
          </li>`;
  element.innerHTML += markup;
};
