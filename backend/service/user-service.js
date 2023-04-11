import UserDto from "../dtos/user-dtos.js";
import ApiError from "../exceptions/api-error.js";
import userModel from "../models/user-model.js";
import tokenService from "./token-service.js";
import bcrypt from "bcrypt";

class UserService {
	async registration(login, password) {
		const condidate = await userModel.findOne({login})
		if(condidate) {
			throw ApiError.BadRequest("Пользователь существует")
		}
		
		const hashPassword = await bcrypt.hash(password, 3)
		const user = await userModel.create({login, password: hashPassword})

		const userDto = new UserDto(user)
		const tokens = tokenService.generationTokens({...userDto});
		await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto}
	}

	async login(login, password) {
		const user = await userModel.findOne({login})
		if(!user) {
			throw ApiError.BadRequest("Пользователь не найден")
		}

		const isPasswordEquals = await bcrypt.compare(password, user.password);
		if(!isPasswordEquals) {
			throw ApiError.BadRequest("Неверный пароль")
		}

		const userDto = new UserDto(user)
		const tokens = tokenService.generationTokens({...userDto});
		await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto}
	}

	async logout(refreshToken) {
		await tokenService.removeToken(refreshToken)
	}

	async refresh(refreshToken) {
		if(!refreshToken) {
			throw ApiError.UnauthorizedError()
		}
		const userData = tokenService.validationRefreshToken(refreshToken)
		const tokenFromDb = tokenService.findToken(refreshToken)

		if(!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError()
		}
		
		const user = await userModel.findById(userData.id)
		const userDto = new UserDto(user)
		const tokens = tokenService.generationTokens({...userDto});
		await tokenService.saveRefreshToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto}
	}
}

export default new UserService();