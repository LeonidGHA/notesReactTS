import { FC } from "react";

import { pathNoteImg } from "../../utils/pathNoteImg";
import { renderFormatDate } from "../../utils/formatDate";

import { IUserNote } from "src/types/commonTypes";

interface IAllNaolteItemProps {
  note: IUserNote;
}

export const AllNotesItem: FC<IAllNaolteItemProps> = ({ note }) => {
  const { id, name, created, category, content, dates, archive } = note;
  return (
    <li className="grid grid-cols-14 gap-4 px-5 py-2 rounded bg-blue-200">
      <div className="flex justify-center items-center">
        <img
          src={pathNoteImg(category)}
          width="24px"
          height="24px"
          className="h-6"
        />
      </div>
      <span className="truncate col-start-2 col-span-2">{name}</span>
      <span className="truncate col-span-2">{renderFormatDate(created)}</span>
      <span className="truncate col-span-2">{category}</span>
      <p className="truncate col-span-2">{content}</p>
      <span className="truncate col-span-2">{dates}</span>
      <div className="flex  items-center" aria-label="edit note button">
        <img
          src={pathNoteImg("Edit")}
          width="24px"
          height="24px"
          data-edit="${id}"
          className="h-6 cursor-pointer"
        />
      </div>
      <div className="flex  items-center" aria-label="archive note button">
        <img
          src={pathNoteImg(archive ? "ArchiveRemove" : "ArchiveAdd")}
          width="24px"
          height="24px"
          data-archive={id}
          className="h-6 cursor-pointer"
        />
      </div>
      <div className="flex  items-center h-6" aria-label="delete note button">
        <img
          src={pathNoteImg("Delete")}
          width="24px"
          height="24px"
          data-delete={id}
          className="h-6 cursor-pointer"
        />
      </div>
    </li>
  );
};
