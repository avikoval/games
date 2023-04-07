import cn from "classnames";
import { MarkProps } from "./types";
import { Mark as MarkType } from "../../../../store/modules/view/xo-game/types";
import styles from "./styles.module.scss";

export const Mark = (props: MarkProps) => {
	const { square } = props;

	const markClassName = cn(
		{[styles["cross"]] : square === MarkType.X},
		{[styles["zero"]] : square === MarkType.O},
	)

	return (
		<div className={markClassName}></div>
	)
}