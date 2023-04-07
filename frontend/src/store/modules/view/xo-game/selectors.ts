import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

export const getState = (state: RootState) => state.view.xoGameViewReducer;

export const getStateGame = createSelector(
    getState,
    state => state
);
