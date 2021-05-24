const Sequelize = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(
  'library_db', // process.env.DB_HOST
  'root', // process.env.DB_USER
  'myPassword', // process.env.DB_PASS
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
