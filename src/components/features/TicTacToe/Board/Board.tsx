import { Square } from "./Square";
import { useEffect, useState } from "react";
import { checkVictory } from "../../../utils/checkVictory";
import { SquareType } from "./types";
import styles from "./styles.module.scss";

export const Board = () => {
	const [squares, setSquares] = useState<SquareType[]>(Array(9).fill(null));
	const [mark, setMark] = useState(1);
	const isVictory = checkVictory(squares);

	const handleSquareClick = (index: number) => {
		if (squares[index] !== null) return;

		const newSquares = [...squares];
		newSquares[index] = mark;
		setSquares(newSquares)

		const newMark = mark === 1 ? 0 : 1;
		setMark(newMark)
	}

	useEffect(() => {
		if (isVictory) {
			setTimeout(() => {
				handleReset()
			}, 10000)
		}
	}, [isVictory])

	const handleReset = () => {
		setSquares(Array(9).fill(null))
	}

	return (
		<>
			<button className={styles["button"]} onClick={handleReset}>reset</button>
			<div className={styles["board"]}>
				{squares.map((square, index) => (
					<Square
						square={square}
						onClick={() => handleSquareClick(index)} 
						key={index}
					/>
				))}
				{isVictory && <div className={styles["overlay"]}>Victory {mark === 1 ? "O" : "X"}</div>}
			</div>
			{!isVictory && (
				<div className={styles["display"]}>сейчас ходит {mark === 1 ? "X" : "O"}</div>
			)}
			
		</>
	)
}
