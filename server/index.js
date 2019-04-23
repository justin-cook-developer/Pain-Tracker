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

app.get('*', (request, response, next) => {
  const filePath = path.join(__dirname, '../public', 'index.html')
  response.sendFile(filePath)
})

app.use((e, request, response, next) => {
  if (response.headersSent) {
    return next(e)
  }
  console.log(e.stack)
  response.status(e.status || 500).send(e.message || 'Internal server error')
})

const PORT = process.env.PORT || 3000

connection.sync('')
  .then(() => {
    app.listen(PORT, () => {
      console.log('Listening at: ', PORT)
    })
  })
  .catch(console.log)
