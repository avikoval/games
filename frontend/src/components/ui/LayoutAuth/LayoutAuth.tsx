import { LOGO_TITLE } from './constants';
import { LayoutAuthProps } from './types';
import styles from "./styles.module.scss";

export const LayoutAuth = (props: LayoutAuthProps) => {
	const {children} = props;

	return (
		<>
			<div className={styles["wrapper"]}>
				<div className={styles["signin"]}>
					<div className={styles["signin__img"]}>
						<span className={styles["signin__img-text"]}>{LOGO_TITLE}</span>
					</div>
					{children}
				</div>
			</div>
		</>
	)
}
