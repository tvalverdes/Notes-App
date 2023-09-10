import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { hash } from 'bcrypt'
const prisma = new PrismaClient()

const getUser = (req: Request, res: Response) => {
  try {
  } catch (error) {}
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
  } catch (error) {}
}

const updateUser = (req: Request, res: Response) => {
  try {
  } catch (error) {}
}
const postUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email } = req.body
    const password = await hash(req.body.password, 13)
    const user = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password,
      },
    })
    res.status(201).json({ user })
  } catch (error) {}
}
const deleteUser = (req: Request, res: Response) => {
  try {
  } catch (error) {}
}

export { getUser, getUsers, updateUser, postUser, deleteUser }
