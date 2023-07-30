import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { SummaryNotesItem } from "../SummaryNotesItem";

import { ISummaryNote } from "src/types/commonTypes";

interface ISummaryNotesListProps {
  summaryNotes: ISummaryNote[];
}

export const SummaryNotesList: FC<ISummaryNotesListProps> = ({
  summaryNotes,
}) => {
  return (
    <ul className=" flex flex-col gap-4 mb-10 h-[30vh] ">
      <li className=" grid grid-cols-3 gap-4 bg-slate-400 p-5 rounded ">
        <span className="pl-10">Note Category</span>
        <span className="text-center">Active</span>
        <span className="text-center">Archived</span>
      </li>
      {summaryNotes.map((note) => (
        <SummaryNotesItem note={note} key={uuidv4()} />
      ))}
    </ul>
  );
};
