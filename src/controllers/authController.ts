import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { tokenSign } from '../utils/jwt.handler'
import { compare, hash } from 'bcrypt'
import { errorResponse } from '../utils/error.handler'
import { UserLoginData } from '../interfaces/user.interface'
const prisma = new PrismaClient()

export const loginCtrl = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({
      where: { email: email },
    })
    if (!user) {
      throw errorResponse(res, 404, 'Usuario no encontrado')
    }
    const validPassword = await compare(password, user.password)
    if (!validPassword) {
      throw errorResponse(res, 403, 'Contraseña incorrecta')
    }
    const tokenSession = await tokenSign(user)
    const data: UserLoginData = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email,
    }
    res.send({ data })
    console.log(tokenSession)
    res.cookie('token', tokenSession, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000,
    })
  } catch (error) {
    res.send({ error })
  }
}

export const showLogin = (req: Request, res: Response) => {
  res.send({ message: 'Login válido' })
}
export const showRegister = (req: Request, res: Response) => {
  res.send('<h1>Interfaz de registro</h1>')
}
