import { Link } from "react-router-dom";
import { Input } from "../../ui/Input";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { DEFAULT_FORM_STATE, LINK_SIGN_UP, LOGIN_PLACEHOLDER, LOGO_TITLE, PASSWORD_PLACEHOLDER, SUBMIT_LABEL, SUPPORT_LABEL, VALIDATION_SCHEMA } from "./constants";
import { useAppDispatch } from "../../../store/hooks";
import { SignInFormValues } from "./types";
import styles from "./styles.module.scss";

export const SignIn = () => {
	// const dispatch = useAppDispatch()

 	const {
		register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: DEFAULT_FORM_STATE, 
        resolver: joiResolver(VALIDATION_SCHEMA),
    });

	const onSubmit = (e: SignInFormValues) => {
		// console.log(e);
	}

	return (
		<div className={styles["wrapper"]}>
			<form className={styles["signin-form"]} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles["signin-form__img"]}>
					<span className={styles["signin-form__img-text"]}>{LOGO_TITLE}</span>
				</div>
				<div className={styles["signin-form__fields"]}>
					{false && (
						<div className={styles["signin-form__error"]}>{}</div>
					)}
					<Input 
						type="text"
						leftIcon={faUser}
						placeholder={LOGIN_PLACEHOLDER}
						{...register("login",
						{required: true})}
					/>
					<Input
						type="password"
						leftIcon={faKey}
						placeholder={PASSWORD_PLACEHOLDER}
						{...register("password", 
						{required: true})} 
					/>
					<button type="submit" className={styles["button-submit"]}>{SUBMIT_LABEL}</button>
					<div className={styles["signin-form__text"]}>
						<Link className={styles["signin-form__text-link"]} to={`/sign_up`}>{LINK_SIGN_UP}</Link>
						<span>&nbsp;{SUPPORT_LABEL}</span>
					</div>
				</div>
			</form>
		</div>
	)
}
