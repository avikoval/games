import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import styles from "./styles.module.scss";

export const Layout = () => {
	return (
		<>
			<NavBar />
			<Header />
			<div className={styles["content"]}>
				<Outlet />
			</div>
		</>
	)
}
