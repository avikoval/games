import { combineReducers } from "@reduxjs/toolkit";
import { testReducer } from "./test/slice";

export const modelReducers = combineReducers({
	testReducer,
});
