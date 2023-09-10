import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
const prisma = new PrismaClient()

const getNote = (req: Request, res: Response) => {
  try {
  } catch (error) {
  }
}

const getNotes = (req: Request, res: Response) => {
  try {
    const notes = prisma.note.findMany({
      where: {
        id: 1
      },
    })
    res.send(notes)
  } catch (error) {
  }
}

const updateNote = (req: Request, res: Response) => {
  try {
  } catch (error) {
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
  }
}
const deleteNote = (req: Request, res: Response) => {
  try {
  } catch (error) {
  }
}

export { getNotes, getNote, updateNote, postNote, deleteNote }
