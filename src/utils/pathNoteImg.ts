import noteImg from "src/assets/images/svg/note.svg";
import ideaImg from "src/assets/images/svg/idea.svg";
import commentImg from "src/assets/images/svg/comment.svg";
import archiveRemoveImg from "src/assets/images/svg/box-remove.svg";
import archiveAddImg from "src/assets/images/svg/box-add.svg";
import editImg from "src/assets/images/svg/edit.svg";
import deleteImg from "src/assets/images/svg/trash.svg";

export const pathNoteImg = (nameImgNote: string): string => {
  let pathImg = "";
  switch (nameImgNote) {
    case "Task":
      pathImg = noteImg;
      break;
    case "Idea":
      pathImg = ideaImg;
      break;
    case "Random Thought":
      pathImg = commentImg;
      break;
    case "ArchiveAdd":
      pathImg = archiveAddImg;
      break;
    case "ArchiveRemove":
      pathImg = archiveRemoveImg;
      break;
    case "Edit":
      pathImg = editImg;
      break;
    case "Delete":
      pathImg = deleteImg;
      break;
    default:
      console.log("Invalid path to image Note");
  }
  return pathImg;
};
