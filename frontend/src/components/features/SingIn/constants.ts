import Joi from "joi";

export const LOGO_TITLE = "Blizzard";
export const SUBMIT_LABEL = "SIGN IN";
export const LINK_SIGN_UP = "Sign up";
export const SUPPORT_LABEL = "if you don't have an account yet.";
export const LOGIN_PLACEHOLDER = "login: Max";
export const PASSWORD_PLACEHOLDER = "password: 1qazxsw2";
export const DEFAULT_FORM_STATE = { login: "", password: "" };

export const VALIDATION_SCHEMA = Joi.object({
    login: Joi.string()
        .min(3)
        .messages({ "string.empty": "" })
        .required()
        .messages({ "string.empty": "" }),
    password: Joi.string().min(3).required().messages({ "string.empty": "" }),
});
