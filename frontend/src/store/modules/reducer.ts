import { combineReducers } from "@reduxjs/toolkit";
import { viewReducers } from "./view/reducer";
import { authorizationReducer } from "./models/authorization";

export const rootReducers = combineReducers({
    view: viewReducers,
    authorizationReducer: authorizationReducer,
});
