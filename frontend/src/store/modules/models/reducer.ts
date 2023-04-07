import { combineReducers } from "@reduxjs/toolkit";
import { authorizationReducer } from "./authorization";

export const modelsReducers = combineReducers({
	authorizationReducer,
});