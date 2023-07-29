import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialFilterStatetype = "Active" | "Archive";

const initialFilterReduxState = "Active";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterReduxState as initialFilterStatetype,
  reducers: {
    setFilterNotes: (_, { payload }: PayloadAction<"Active" | "Archive">) =>
      payload,
  },
});

export default filterSlice.reducer;

export const { setFilterNotes } = filterSlice.actions;
