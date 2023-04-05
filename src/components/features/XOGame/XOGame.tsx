import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setMark, resetGame } from "../../../store/modules/view/xo-game/slice";
import { checkVictory } from "../../utils/checkVictory";
import { getStateGame } from "../../../store/modules/view/xo-game/selectors";
import { Mark } from "./Mark";
import styles from "./styles.module.scss";

export const XOGame = () => {
	const {squares, mark} = useAppSelector(getStateGame);
	const dispatch = useAppDispatch();
	const isVictory = checkVictory({squares, mark});

	useEffect(() => {
		dispatch(resetGame())
	}, [])
	
	const handleSquareClick = (index: number) => {
		if (squares[index] !== null) return;
		dispatch(setMark(index))
	}
	
	const handleReset = () => {
		dispatch(resetGame())
	}

	return (
		<div className={styles["game"]}>
			<button className={styles["button"]} onClick={handleReset}>Reset game</button>
			<div className={styles["board"]}>
				{squares.map((square, index: number) => (
					<div 
						onClick={() => handleSquareClick(index)} 
						className={styles["square"]}
						key={index}
					>
						<Mark square={square}/>
					</div>
				))}
				{isVictory && <div className={styles["overlay"]}>{!!mark ? "O" : "X"} win!</div>}
			</div>
			<div className={styles["display"]}>Cейчас ходит {!isVictory && (!!mark ? "X" : "O")}</div>
		</div>
	)
}
