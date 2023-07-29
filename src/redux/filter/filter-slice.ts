import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialFilterReduxState: string = "Active";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterReduxState,
  reducers: {
    setFilterNotes: (_, { payload }: PayloadAction<string>) => payload,
  },
});

export default filterSlice.reducer;

export const { setFilterNotes } = filterSlice.actions;
