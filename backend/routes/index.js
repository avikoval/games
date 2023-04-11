import express from 'express';
import userController from '../controllers/user-controller.js';
import {body} from "express-validator";
const router = express.Router()

router.post('/registration',
	body("login").isLength({min: 2, max: 20}),
	body("password").isLength({min: 3, max: 30}),
	userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)

export default router
