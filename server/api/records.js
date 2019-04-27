const express = require('express');
const router = express.Router();

const { Record } = require('../db/index');

router.get('/', async (request, response, next) => {
  try {
    const { limit, offset } = request.query;
    const records = await Record.findAndCountAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit: limit || 14,
      offset: offset || 0,
      order: [['date', 'DESC']],
    });
    response.json(records);
  } catch (e) {
    next(e);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const { title, painLevel, notes, date } = request.body;
    const [record] = await Record.findOrCreate({
      where: { date },
      defaults: { title, painLevel, notes },
    });
    response.json(record.sendMinimal());
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    if (id === undefined) {
      response.status(400).send('You must specify an id to delete a record.');
    }
    await Record.deleteRecord(id);
    response.status(200);
    response.json({});
  } catch (e) {
    next(e);
  }
});

router.put('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    if (id === undefined) {
      response.status(400).send('You must specify an id to update a record.');
    }
    const updatedRecord = await Record.updateRecord(id, request.body);
    response.json(updatedRecord.sendMinimal());
  } catch (e) {
    next(e);
  }
});

module.exports = router;
