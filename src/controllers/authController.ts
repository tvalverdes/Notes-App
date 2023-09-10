import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { tokenSign } from '../utils/jwt.handler'
import { compare, hash } from 'bcrypt'
import { errorResponse } from '../utils/error.handler'
const prisma = new PrismaClient()

export const loginCtrl = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({
      where: { email: email },
    })

    if (!user) {
      res.status(404).send({ error: 'No se encontró usuario' })
      return
    }

    const validPassword = await compare(password, user.password)

    const tokenSession = await tokenSign(user)
    const data = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email,
    }
    if (validPassword) {
      res.send({
        data: data,
        tokenSession,
      })
      return
    } else {
      throw errorResponse(res, 403, 'Contraseña incorrecta')
    }
  } catch (error) {
    res.send(error)
  }
}
