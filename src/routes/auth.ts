import { Request, Response, Router } from 'express'
import { loginCtrl } from '../controllers/authController'
import { checkAuth } from '../middlewares/authMiddleware'


const router = Router()

router.post('/login', checkAuth, loginCtrl)
router.post('/register', )
export { router }
