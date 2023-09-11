import { Request, Response, Router } from 'express'
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  updateUser,
} from '../controllers/userController'

const router = Router()

/* router.get('/signin', (req, res, next) => {
  res.send('GET request to the homepage')
  res.end
}) */
router.get('/setcookie', (req: Request, res: Response) => {
  res.cookie('Nombre de cookie', 'valor de cookie', {
    maxAge: 1000 * 60,
    httpOnly: true,
    secure: true,
    sameSite: 'strict', //determina si puede obtenerse en el mismo dominio (strict) o en varios (lax)
  })
  res.send('HLA')
})
router.get('/', getUsers)

router.get('/getcookies', (req: Request, res: Response) => {
  console.log(req.cookies)
  res.send('Reading cookies...')
})
router.get('/deletecookies', (req: Request, res: Response) => {
  console.log(req.cookies)
  res.clearCookie('Nombre de cookie')
  res.send('Deleting cookies...')
})

router.get('/:id', getUser)
router.post('/', postUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export { router }
