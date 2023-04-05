import { combineReducers } from "@reduxjs/toolkit";
import { xoGameViewReducer } from "./xo-game/slice";

export const viewReducers = combineReducers({
	xoGameViewReducer,
});
