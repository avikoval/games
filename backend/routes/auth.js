import express from 'express'
import * as controllers from '../controllers/auth.js'
const router = express.Router()

router.post('/auth', controllers.login)
// router.post('/getcards', controllers.searchToken, controllers.getcards)
// router.post('/logout', controllers.logout)
// router.post('/refreshtoken', controllers.refreshtoken)
// router.get('/free', controllers.free)
// router.get('/safe', controllers.searchToken, controllers.safe)

export default router
