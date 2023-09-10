import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.handler'
import { errorResponse } from '../utils/error.handler'

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      throw errorResponse(res, 401, 'Token de autorización faltante')
    }
    const token = req.headers.authorization.split(' ').pop()
    if (!token) {
      throw errorResponse(res, 400, 'Token inválido')
    }
    const tokenData = await verifyToken(token)
    console.log(tokenData)
    if (!tokenData) {
      throw errorResponse(res, 400, 'Token no coincide en la verificación')
    }
    next()
  } catch (error) {
    res.send({ message: error })
  }
}
