import Joi from "joi";

export const LOGO_TITLE = "Blizzard";
export const SUBMIT_LABEL = "SIGN UP";
export const LINK_SIGN_UP = "Sign in";
export const SUPPORT_LABEL = "By creating an account, you agree to our Privacy Policy";
export const LOGIN_PLACEHOLDER = "* login";
export const PASSWORD_PLACEHOLDER = "* password";

export const DEFAULT_FORM_STATE = { login: "", password: "" };

export const VALIDATION_SCHEMA = Joi.object({
    login: Joi.string()
        .min(3)
        .messages({ "string.empty": "" })
        .required()
        .messages({ "string.empty": "" }),
    password: Joi.string().min(3).required().messages({ "string.empty": "" }),
});
