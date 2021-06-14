const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    book_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },

    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    freezeTableName: true, //otherwise sql will plurize the model name i.e user becomes users. (inflection behind the scenes)
    timestamps: false,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;
