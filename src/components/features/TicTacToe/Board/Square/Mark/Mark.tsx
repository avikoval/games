import cn from "classnames";
import styles from "./styles.module.scss";

export const Mark = ({square}: any) => {

	const markClasses = cn(
		{[styles["cross"]] : square === 1},
		{[styles["zero"]] : square === 0},
	)

	return (
		<div className={markClasses}></div>
	)
}