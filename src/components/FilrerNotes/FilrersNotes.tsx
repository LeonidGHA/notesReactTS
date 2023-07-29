import { FC } from "react";

import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { selectFilterNotes } from "src/redux/filter/filter-selectors";
import { setFilterNotes } from "src/redux/filter/filter-slice";

const activelStyleNameFilter =
  "underline underline-offset-2 font-bold duration-150 cursor-pointer";

const normalStyleNameFilter = "cursor-pointer";

export const FilrersNotes: FC = () => {
  const filterNotes = useAppSelector(selectFilterNotes);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className=" mb-10 flex gap-5 justify-center">
        <span
          className={
            filterNotes === "Active"
              ? activelStyleNameFilter
              : normalStyleNameFilter
          }
          onClick={() => dispatch(setFilterNotes("Active"))}
        >
          Active Note
        </span>
        <span
          className={
            filterNotes === "Archive"
              ? activelStyleNameFilter
              : normalStyleNameFilter
          }
          onClick={() => dispatch(setFilterNotes("Archive"))}
        >
          Archive Note
        </span>
      </div>
    </>
  );
};
