import { combineReducers } from "@reduxjs/toolkit";
import { modelReducers } from "./model/reducer";
import { rtkModelReducer } from "./rtk-model";
import { viewReducers } from "./view/reducer";

export const rootReducers = combineReducers({
    model: modelReducers,
    view: viewReducers,
    rtkModel: rtkModelReducer,
});
