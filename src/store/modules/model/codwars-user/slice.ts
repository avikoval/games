import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, SLICE_NAME } from "./constansts";

const codeWarsSlice = createSlice({
    name: SLICE_NAME,
    initialState: INITIAL_STATE,
    reducers: {},
});

export const testActions = codeWarsSlice.actions;
export const testReducer = codeWarsSlice.reducer;
