import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
const prisma = new PrismaClient()

const getNote = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'Error al obtener usuario')
  }
}

const getNotes = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'Error al obtener usuarios')
  }
}

const updateNote = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_USER')
  }
}
const postNote = async (req: Request, res: Response) => {
  try {
    const { text, userId } = req.body
    const note = await prisma.note.create({
      data: {
        text,
        userId,
      },
    })
    res.status(201).send(note)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_USER')
  }
}
const deleteNote = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_USER')
  }
}

export { getNotes, getNote, updateNote, postNote, deleteNote }
