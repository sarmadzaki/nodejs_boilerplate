'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sub_lockers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lockerid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lockers',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      type: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      available: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sub_lockers');
  }
};