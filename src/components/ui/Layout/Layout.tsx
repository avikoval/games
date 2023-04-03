import { NavBar } from './components/NavBar'
import { Outlet } from 'react-router-dom'
import styles from "./styles.module.scss";

export const Layout = () => {
	return (
		<div className={styles["layout"]}>
			<NavBar />
			<div className={styles["content"]}>
				<Outlet />
			</div>
		</div>
	)
}
