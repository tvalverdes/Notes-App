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

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', postUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export { router }
