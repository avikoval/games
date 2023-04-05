import { NavBar } from './components/NavBar'
import { Outlet } from 'react-router-dom'
import styles from "./styles.module.scss";

export const Layout = () => {
	return (
		<>
			<NavBar />
			<div className={styles["content"]}>
				<Outlet />
			</div>
		</>
	)
}
