import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handler'
import { hashingPassword } from '../utils/hashing'
const prisma = new PrismaClient()

const getUser = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'Error al obtener usuario')
  }
}

const login = (req: Request, res: Response) => {
  try {
    const dataDb = prisma.user.findUniqueOrThrow({
      where: {
        id: req.body.id
      }
    })
  } catch (error) {
    handleHttp(res, 'Error en login de usuario')
  }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        name: true,
        lastName: true,
        email: true,
      },
    })
    res.send(users)
  } catch (error) {
    handleHttp(res, 'Error al obtener usuarios')
  }
}

const updateUser = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_USER')
  }
}
const postUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email } = req.body
    const password = await hashingPassword(req.body.password)
    const user = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password,
      },
    })
    res.status(201).json({ user })
  } catch (error) {
    handleHttp(res, 'ERROR_POST_USER')
  }
}
const deleteUser = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_USER')
  }
}

export { getUser, getUsers, updateUser, postUser, deleteUser }
