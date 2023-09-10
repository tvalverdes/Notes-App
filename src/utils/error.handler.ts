import { Response } from 'express'

export const errorResponse = (
  res: Response,
  statusCode: number,
  errorMessage: string
) => {
  res.status(statusCode)
  throw errorMessage
}
