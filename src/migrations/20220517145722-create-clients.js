'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING,
        unique: true

      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        length: 100
      },
      phone: {
        type: Sequelize.INTEGER
      },
      companyThatWorks: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        unique: true

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  }
};