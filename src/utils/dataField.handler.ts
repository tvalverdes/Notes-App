import { Response } from 'express'
import { errorResponse } from './error.handler'

export const verifyLogin = (res: Response,email: string, password: string) => {
  if (!email || !password) {
    throw errorResponse(res, 400, 'Email y contraseña son requeridos')
  }
  
}