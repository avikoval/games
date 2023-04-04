import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import cn from "classnames";
import styles from "./styles.module.scss";

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	
	const handelShowNavBar = () => {
		setOpen(true)
	}
	const handelHideNavBar = () => {
		setOpen(false)
	}
	
	const navbarClasses = cn(
		styles["navbar"],
		{[styles["navbar_open"]]: isOpen},
	)

	return (
		<div 
			className={navbarClasses} 
			onMouseEnter={handelShowNavBar} 
			onMouseLeave={handelHideNavBar}
		>	
			<Link className={styles["navbar__link"]} to={`/`}>
				<img 
					src={logo} 
					className={styles["navbar__link__img"]} 
					alt="logo"
				/>
			</Link>
			<Link className={styles["navbar__link"]} to={`tic-tac-toe`}>TTT</Link>
		</div>
	)
}
