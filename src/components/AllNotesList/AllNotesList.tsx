import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { pathNoteImg } from "../../utils/pathNoteImg";

import { IUserNote } from "src/types/commonTypes";
import { AllNotesItem } from "../AllNotesItem/AllNotesItem";

interface IAllNotesListProps {
  userNotes: IUserNote[];
  openModal: () => void;
  getNoteId: (id: string) => void;
}

export const AllNotesList: FC<IAllNotesListProps> = ({
  userNotes,
  openModal,
  getNoteId,
}) => {
  return (
    <ul className="flex flex-col gap-4 mb-10 h-[40vh]  overflow-y-auto">
      <li className="grid grid-cols-14 gap-4 bg-slate-400 p-5 rounded ">
        <span className="col-start-2 col-span-2">Name</span>
        <span className="col-span-2">Created</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-2">Content</span>
        <span className="col-span-2">Dates</span>
        <div className="col-start-13 ">
          <img
            src={pathNoteImg("ArchiveAdd")}
            width="24px"
            height="24px"
            className="h-6"
          />
        </div>
        <div>
          <img
            src={pathNoteImg("Delete")}
            width="24px"
            height="24px"
            className="h-6"
          />
        </div>
      </li>
      {userNotes.map((note) => {
        return (
          <AllNotesItem
            key={uuidv4()}
            note={note}
            openModal={openModal}
            getNoteId={getNoteId}
          />
        );
      })}
    </ul>
  );
};
