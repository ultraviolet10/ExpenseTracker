'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    text: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      validate: {
        len: {
          msg: 'Please enter text' // Error message I want to display
        }
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
      validate: {
        len: {
          msg: 'Please enter amount' // Error message I want to display
        }
      }
    },
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};