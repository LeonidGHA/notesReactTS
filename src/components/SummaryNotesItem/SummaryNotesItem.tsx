import { FC } from "react";

import { pathNoteImg } from "../../utils/pathNoteImg";

import { ISummaryNote } from "src/types/commonTypes";

interface ISummaryNotesItemProps {
  note: ISummaryNote;
}

export const SummaryNotesItem: FC<ISummaryNotesItemProps> = ({ note }) => {
  const { category, archive, active } = note;
  return (
    <li className="grid grid-cols-3 gap-4 px-5 py-2 rounded bg-blue-200">
      <div className="flex  items-center gap-4">
        <img src={pathNoteImg(category)} width="24px" height="24px" />
        <span className="truncate col-start-2">{category}</span>
      </div>
      <span className="text-center">{active}</span>
      <span className="text-center">{archive}</span>
    </li>
  );
};
