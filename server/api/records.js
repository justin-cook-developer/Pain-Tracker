const express = require('express')
const router = express.Router()

const { Record } = require('../db/index')

router.get('/', async (request, response, next) => {
  try {
    const { limit, offset } = request.query
    console.log(limit, offset)
    const records = await Record.findAll({ limit, offset })
    response.json(records)
  } catch (e) {
    next(e);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const { title, painLevel, notes, date } = request.body
    const [record] = await Record.findOrCreate({
      where: { date },
      defaults: { title, painLevel, notes },
    })
    response.json(record)
  } catch (e) {
    next(e);
  }
});

module.exports = router
