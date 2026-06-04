require('dotenv').config()
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const sessionMiddleware = require('./config/session')
const usersRouter = require('./routes/users')
const cartRouter = require('./routes/cart')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}))
app.use(express.json())
app.use(sessionMiddleware)

app.use('/api/users', usersRouter)
app.use('/api/cart', cartRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

module.exports = app