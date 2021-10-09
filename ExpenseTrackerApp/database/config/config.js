const path = require('path');
var env_name = process.env.NODE_ENV || 'development'
require("dotenv").config({ 
  path: path.resolve(__dirname, '../../config/config.env')
});

const {
  DB_HOSTNAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE
} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "sequelize_db_dev",
    "host": DB_HOSTNAME,
    "dialect": "postgres",
    // "ssl": true,
    "dialectOptions": {
      // "require": true,
      // "ssl": {
      //   "rejectUnauthorized": false
      // }
    }
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "sequelize_db_test",
    "host": DB_HOSTNAME,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "sequelize_db_prod",
    "host": DB_HOSTNAME,
    "dialect": "postgres"
  }
}
