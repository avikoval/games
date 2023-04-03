import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, SLICE_NAME } from "./constansts";

const testSlice = createSlice({
    name: SLICE_NAME,
    initialState: INITIAL_STATE,
    reducers: {},
});

export const testActions = testSlice.actions;
export const testReducer = testSlice.reducer;
