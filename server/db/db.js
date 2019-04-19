const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.databaseUrl || 'postgres://localhost:5432/painLog');

module.exports = {
  connection,
}
