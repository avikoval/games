import { Mark as MarkType, SquareProps } from "./types";
import styles from "./styles.module.scss";
import { Mark } from "./Mark";

export const Square = (props: SquareProps) => {
	const { onClick, square } = props;

	return (
		<div onClick={onClick} className={styles["square"]}>
			<Mark square={square}/>
		</div>
	)
}