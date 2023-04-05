import { combineReducers } from "@reduxjs/toolkit";
import { testReducer } from "./codwars-user/slice";

export const modelReducers = combineReducers({
	testReducer: testReducer,
});
