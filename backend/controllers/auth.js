import jwt from 'jsonwebtoken'
import { users } from '../models/users.js'

export const login = (req, res) => {
	const login = req.body.login;
	const pass = req.body.password;
	
	const findUser = users.find((el) => {
		if (el.login === login && el.password === pass) {
			return el
		}
	})
	
	if (typeof findUser !== 'undefined') {
		const token = jwt.sign({
			id: findUser.id,
		}, process.env.JWT_KEY, {expiresIn: 60})
	
		res.status(200).json({
			status: 200,
			message: 'success login',
			accessToken: token,
			user: findUser.name
		})
	} else {
		res.status(401).json({
			status: 401,
			message: 'login failed'
		})
	}
}

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

// export const safe = (req, res) => {
// 	jwt.verify(req.token, process.env.JWT_KEY, (err, data) => {
// 		if (err) {
// 			res.status(403).json({
// 				message: 'Error! Bad token'
// 			})
// 		} else {
// 			res.json({
// 				message: 'Success enter to SAFE api with correct JWT',
// 				data: data
// 			})
// 		}
// 	})
// }