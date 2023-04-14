import { combineReducers } from "@reduxjs/toolkit";
import { viewReducers } from "./view/reducer";

export const rootReducers = combineReducers({
    view: viewReducers,
});
