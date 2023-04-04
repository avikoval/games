import { Board } from "./Board";
import styles from "./styles.module.scss";

export const TicTacToe = () => {
	
	return (
		<div className={styles["game"]}>
			<Board/>
		</div>
	)
}
