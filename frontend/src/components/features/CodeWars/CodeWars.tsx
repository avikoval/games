// import { useEffect } from "react";
import { useGetUserQuery } from "../../../store/modules/models/codwars-user/codewarsApi";
import styles from "./styles.module.scss";

export const CodeWars = () => {
	const { data } = useGetUserQuery('')
	console.log(data);
	
	// useEffect(() => {
		
	// }, [dispatch])

	return (
		<div className={styles["content"]}>
			{data && (
				<pre>{JSON.stringify(data, null, 2)}</pre>
			)}
		</div>
	)
}
