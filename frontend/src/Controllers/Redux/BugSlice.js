import { createSlice } from "@reduxjs/toolkit";
import { retrieveBugs } from "../BugController";

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBug: (state) => retrieveBugs(),
    createBug: (state, action) => {},
    updateBug: (state, action) => {},
    resolveBug: (state, action) => {},
  },
});

export default slice.reducer;

export const { getBug, createBug, updateBug, resolveBug } = slice.actions;
