import { combineReducers } from "@reduxjs/toolkit";
import { signInReducer } from "./sign-in/slice";

export const modelReducers = combineReducers({
	signInReducer,
});
