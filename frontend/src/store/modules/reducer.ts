import { combineReducers } from "@reduxjs/toolkit";
import { viewReducers } from "./view/reducer";
import { modelsReducers } from "./models/reducer";

export const rootReducers = combineReducers({
    view: viewReducers,
    models: modelsReducers,
});
