import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import cn from "classnames";
import styles from "./styles.module.scss";

export const NavBar = () => {
	const [isOpen, setOpen] = useState(false);

	const navbarClasses = cn(
		styles["navbar"],
		{[styles["navbar_open"]]: isOpen}
	)

	const handelShowNavBar = () => {
		setOpen(true)
	}
	const handelHideNavBar = () => {
		setOpen(false)
	}

	return (
		<div 
			className={navbarClasses} 
			onMouseEnter={handelShowNavBar} 
			onMouseLeave={handelHideNavBar}
		>
			<img src={logo} className={styles["logo"]} alt="logo" />
			<div>
				<Link className={styles["link"]} to={`/`}>Tic-tac-toe</Link>
				<Link className={styles["link"]} to={`test`}>Test</Link>
			</div>
		</div>
	)
}
