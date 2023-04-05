import { XOGameState } from "../../store/modules/view/xo-game/types";

export const checkVictory = ({squares, mark}: XOGameState): boolean => {
	let combinationsToVictory = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < combinationsToVictory.length; i++) {
		let line = combinationsToVictory[i]

		const prevMark = mark === 1 ? 0 : 1;

		if( squares[line[0]] === prevMark && 
			squares[line[1]] === prevMark && 
			squares[line[2]] === prevMark )
		{ return true }
	}
	return false;
}