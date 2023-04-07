export enum Mark {
	O,
	X
}

export type XOGameState = {
	squares: (null | Mark)[];
	mark: Mark;
}