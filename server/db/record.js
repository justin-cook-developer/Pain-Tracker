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

Record.beforeValidate(instance => {
  correctPainLevel(instance)
})

Record.beforeCreate(instance => {
  formatInstance(instance)
})

Record.beforeUpdate(instance => {
  formatInstance(instance)
})

module.exports = Record
