import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

export const verifyCookieToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenCookie = req.cookies.token
    console.log(tokenCookie)
    console.log(jwt.verify(tokenCookie, process.env.JWT_SECRET as string))
    res.send({ message: 'Sesión iniciada' })
    return jwt.verify(tokenCookie, process.env.JWT_SECRET as string)
  } catch (err) {
    res.send({ message: 'Inicia sesión primero' })
    next()
  }
}
