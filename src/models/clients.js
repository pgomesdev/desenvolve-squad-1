'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
  
    static associate(models) {
      
    }
  }
  Clients.init({
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    companyThatWorks: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};

