// import Joi from "joi";



export const DEFAULT_FORM_STATE = { login: "admin", pass: "admin" };

// export const VALIDATION_SCHEMA = Joi.object({
//     username: Joi.string()
//         .lowercase()
//         .trim()
//         .required()
//         .messages({ "string.empty": "" })
//         .pattern(
//             /^(?![-._])[A-Za-z0-9.\-_]+@(((?![-._])[A-Za-z0-9\-_]+)(\.(?![-._])[A-Za-z0-9\-_]+)+)$/
//         )
//         .message("Введен неверный формат эл.почты")
//         .pattern(/^[A-Za-z0-9.\-_]{1,63}@[A-Za-z0-9\-_.]{1,66}$/)
//         .message(
//             "Превышена максимальная длина локальной/доменной части эл.почты"
//         ),
//     password: Joi.string().min(1).required().messages({ "string.empty": "" }),
// });
