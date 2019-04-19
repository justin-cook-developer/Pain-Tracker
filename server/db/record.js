const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const { connection } = require('./db')
const { titleCase, paragraphCase } = require('../../utilities/index')

const formatInstance = instance => {
  instance.title = titleCase(instance.title)
  instance.notes = paragraphCase(instance.notes)
}

const correctPainLevel = instance => {
  const level = instance.painLevel
  if (level < 0) {
    instance.painLevel = 0
  } else if (level > 10) {
    instance.painLevel = 10
  }
}

class Record extends Model {
  static async deleteRecord(id) {
    try {
      const record = await this.findByPk(id)
      await record.destroy()
      return id
    } catch(e) {
      console.log(e)
    }
  }

  static async updateRecord(id, record) {
    try {
      const recordFromDatabase = await this.findByPk(id)
      const updatedRecord = await recordFromDatabase.update(record)
      return updatedRecord
    } catch(e) {
      console.log(e)
    }
  }

  sendMinimal() {
    const minimalRecord = { ...this.dataValues }
    delete minimalRecord.createdAt
    delete minimalRecord.updatedAt
    return minimalRecord
  }
}

Record.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [0, 100],
    }
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  painLevel: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 10,
    }
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true,
    }
  }
},
{
  sequelize: connection,
  modelName: 'record'
})

Record.beforeValidate(correctPainLevel)

Record.beforeCreate(formatInstance)

Record.beforeUpdate(formatInstance)

module.exports = Record
