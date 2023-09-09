import { Request, Response, Router } from 'express'
import {
  deleteNote,
  getNote,
  getNotes,
  postNote,
  updateNote,
} from '../controllers/noteController'

const router = Router()

/* router.get('/signin', (req, res, next) => {
  res.send('GET request to the homepage')
  res.end
}) */

router.get('/', getNote)
router.get('/:id', getNotes)
router.post('/', postNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export { router }
