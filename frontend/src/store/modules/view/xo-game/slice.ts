import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, SLICE_NAME } from "./constants";
import { Mark } from "./types";

const xoGameSlice = createSlice({
	name: SLICE_NAME,
	initialState: INITIAL_STATE,
	reducers: {
		setMark: (state, action: PayloadAction<number>) => {
			state.squares[action.payload] = state.mark;
			state.mark = state.mark === Mark.X ? Mark.O : Mark.X;
		},
		resetGame: () => INITIAL_STATE
	}
})

export const {setMark, resetGame} = xoGameSlice.actions;
export const xoGameViewReducer = xoGameSlice.reducer;