import { User } from '@prisma/client'
require('dotenv').config()
import jwt from 'jsonwebtoken'

export const tokenSign = async (user: User) => {
  try {
    return jwt.sign(
      {
        name: user.name,
        id: user.id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '8h',
      }
    )
  } catch (err) {
    console.log(err)
  }
}

export const verifyToken = async (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string)
  } catch (err) {
    return null
  }
}
