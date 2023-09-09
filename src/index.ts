import express, { json } from 'express'
const app = express()
app.use(express.json())
const port = process.env.PORT ?? 1234
import routes from './routes'

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
app.use(routes)
