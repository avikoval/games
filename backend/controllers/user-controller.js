import ApiError from "../exceptions/api-error.js";
import userService from "../service/user-service.js";
import { validationResult } from "express-validator";
validationResult

class UserController {
	async registration(req, res, next) {
		try {
			const errors = validationResult(req)
			if(!errors.isEmpty()) {
				return next(ApiError.BadRequest("Ошибка валидации", errors.array()))
			}
			const {login, password} = req.body;
			const userData = await userService.registration(login, password);
			
			res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			return res.json(userData)
		} catch (e) {
			next(e)
		}
	}

	async login(req, res, next) {
		try {
			const {login, password} = req.body;
			const userData = await userService.login(login, password);
			res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			return res.json(userData)
		} catch (e) {
			next(e)
		}
	}
	async logout(req, res, next) {
		try {
			const {refreshToken} = req.cookies;
			await userService.logout(refreshToken)
			res.clearCookie("refreshToken")
			return res.json("logout")
		} catch (e) {
			next(e)
		}
	}
	async refresh(req, res, next) {
		try {
			const {refreshToken} = req.cookies;
			const userData = await userService.refresh(refreshToken);
			res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			return res.json(userData)
		} catch (e) {
			next(e)
		}
	}
}

export default new UserController()


// export const auth = (req, res) => {
// 	const {login, password} = req.body;
	
// 	const findUser = users.find((user) => {
// 		if (user.login === login && user.password === password) {
// 			return user
// 		}
// 	})
	
// 	if (typeof findUser !== 'undefined') {
// 		const token = jwt.sign({
// 			id: findUser.id,
// 		}, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"})
	
// 		const refreshToken = jwt.sign({
// 			id: findUser.id,
// 		}, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"})
		
// 		res.cookie("refreshToken", refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
// 		res.status(200).json({
// 			status: 200,
// 			message: 'success login',
// 			accessToken: token,
// 			user: findUser.login
// 		})
// 	} else {
// 		res.status(401).json({
// 			status: 401,
// 			message: 'login failed'
// 		})
// 	}
// }



// export const searchToken = function(req, res, next) {
// 	const currentToken = req.headers['authorization'];
	
// 	if (typeof currentToken !== 'undefined') {
// 		const bearer = currentToken.split(' ')[1]
// 		req.token = bearer
// 		next()
// 	} else {
// 		res.status(403).json({
// 			message: 'Error! JWT dont passed in header Authorization'
// 		})
// 	}
// }
