const path = require('path')
const express = require('express')
const morgan = require('morgan')

const { connection } = require('./db/index')

const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../', 'public')))

app.use('/api', require('./api/index.js'))

app.use((request, response, next) => {
  response.status(404)
  response.send('Page not found. Incorrect route.')
})

app.use((e, request, response, next) => {
  console.log(e)
  next(e)
})

const PORT = process.env.PORT || 3000

connection.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Listening at: ', PORT)
    })
  })
  .catch(console.log)
