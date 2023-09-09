import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const clearFileName = (fileName: String) => {
  const file = fileName.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = clearFileName(filename)
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export default router
