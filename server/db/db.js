const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://localhost:5432/painLog');

module.exports = {
  connection,
}
