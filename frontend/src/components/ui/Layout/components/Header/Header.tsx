import cn from "classnames";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Header = () => {
	const [isOpen, setOpen] = useState(false);

	
	const handelShowNavBar = () => {
		setOpen(true)
	}
	const handelHideNavBar = () => {
		setOpen(false)
	}

	const headerClasses = cn(
		styles["header"],
		{[styles["header_open"]]: isOpen},
	)

	return (
		<div 
			className={headerClasses}
			onMouseEnter={handelShowNavBar} 
			onMouseLeave={handelHideNavBar}
		>
				<button className={styles["button-user"]}></button>
		</div>
	)
}
