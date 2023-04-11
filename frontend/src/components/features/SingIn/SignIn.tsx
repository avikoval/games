import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";
import styles from "./styles.module.scss";
import { DEFAULT_FORM_STATE } from "./constants";
import { useAppDispatch } from "../../../store/hooks";
import { fetchAuthLodin } from "../../../store/modules/models/authorization/slice";
import { SignInFormValues } from "./types";

export const SignIn = () => {
	const dispatch = useAppDispatch()

 	const {
		register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: DEFAULT_FORM_STATE,
        // resolver: joiResolver(VALIDATION_SCHEMA),
    });

	const onSubmit = (e: SignInFormValues) => {
		dispatch(fetchAuthLodin(e))
	}

	return (
		<div className={styles["wrapper"]}>
			<form className={styles["signin-form"]} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<img
						src={logo} 
						className={styles["navbar__link-img"]} 
						alt="logo"
					/>
					<div>Blizzard</div>
				</div>
				<div>
					<input type="text"  {...register("login", {required: true})} />
					<input type="password"  {...register("pass", {required: true})} />
					<button type="submit">SIGN IN</button>
				</div>
				<div>Sign up if you don't have an account yet.</div>
			</form>
		</div>
	)
}
