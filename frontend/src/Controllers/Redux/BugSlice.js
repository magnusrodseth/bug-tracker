import { createSlice } from "@reduxjs/toolkit";
import { BugController } from "../BugController";

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBugs: (state) => BugController(),
    createBug: (state, action) => {},
    updateBug: (state, action) => {},
    resolveBug: (state, action) => {},
  },
});

export default slice.reducer;

export const { getBugs, createBug, updateBug, resolveBug } = slice.actions;
