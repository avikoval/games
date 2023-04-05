import { XOGameState } from "./types";

export const SLICE_NAME = "xogame";

const BOARD = [
	null, null, null,
	null, null, null,
	null, null, null,
]

export const INITIAL_STATE: XOGameState = {
    squares: BOARD, 
    mark: 1, 
};
