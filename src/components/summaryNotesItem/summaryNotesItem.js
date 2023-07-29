import { pathNoteImg } from "../../utils/pathNoteImg";

export const summaryNotesItem = (note) => {
  const { category, archive, active } = note;
  return `<li class="grid grid-cols-3 gap-4 px-5 py-2 rounded bg-blue-200">
      <div class="flex  items-center gap-4"><img src='${pathNoteImg(
        category
      )}' width='24px' height='24px'><span class="truncate col-start-2">${category}</span></div> 
      
      <span class="text-center">${active}</span>
      <span class="text-center">${archive}</span>
    </li>`;
};
