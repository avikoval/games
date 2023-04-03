import { combineReducers } from "@reduxjs/toolkit";
import { modelReducers } from "./model/reducer";

export const rootReducers = combineReducers({
    model: modelReducers,
});
