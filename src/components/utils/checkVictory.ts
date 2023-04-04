import { SquareType } from "../features/TicTacToe/Board/types";

export const checkVictory = (squares: SquareType[]): boolean => {
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
		
		if( squares[line[0]] === 1 && 
			squares[line[1]] === 1 && 
			squares[line[2]] === 1 )
		{ return true }
		
		if( squares[line[0]] === 0 && 
			squares[line[1]] === 0 && 
			squares[line[2]] === 0 )
		{ return true }
	}
	return false;
}