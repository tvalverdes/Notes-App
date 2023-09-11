import { Router } from 'express'
import {
  loginCtrl,
  showLogin,
  showRegister,
} from '../controllers/authController'
import { checkAuth } from '../middlewares/authMiddleware'
import { verifyCookieToken } from '../middlewares/cookieAuthMiddleware'

const router = Router()

router.post('/login', loginCtrl)
router.get('/login', verifyCookieToken, showLogin)
router.post('/register')
router.get('/register', showRegister)
export { router }
