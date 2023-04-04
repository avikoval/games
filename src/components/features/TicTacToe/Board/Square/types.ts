export enum Mark {
	ZERO,
	CROSS,
}

export type SquareProps = {
	onClick: () => void;
	square: Mark | null;
}