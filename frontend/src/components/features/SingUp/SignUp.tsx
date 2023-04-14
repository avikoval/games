import { Link } from "react-router-dom";
import { Input } from "../../ui/Input";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { DEFAULT_FORM_STATE, LINK_SIGN_UP, LOGIN_PLACEHOLDER, PASSWORD_PLACEHOLDER, SUBMIT_LABEL, SUPPORT_LABEL, VALIDATION_SCHEMA } from "./constants";
import { useAppDispatch } from "../../../store/hooks";
import { SignInFormValues } from "./types";
import styles from "./styles.module.scss";
import { LayoutAuth } from "../../ui/LayoutAuth";

export const SignUp = () => {
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
		<LayoutAuth>
			<form className={styles["signup-form"]} onSubmit={handleSubmit(onSubmit)}>
				{false && (
					<div className={styles["signup-form__error"]}>{}</div>
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
				<Link className={styles["signup-form__text-link"]} to={`/sign_in`}>{LINK_SIGN_UP}</Link>
				<div className={styles["signup-form__text"]}>{SUPPORT_LABEL}</div>
			</form>
		</LayoutAuth>
	)
}
