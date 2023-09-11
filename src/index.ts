import express, { json } from 'express'
import cookieParser from 'cookie-parser'
const app = express()
app.use(express.json())
import 'dotenv/config'
const port = process.env.PORT ?? 1234
import routes from './routes'

app.use(cookieParser())

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
app.use(routes)
