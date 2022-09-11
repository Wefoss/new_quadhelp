'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Conversations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from: {
        type: Sequelize.INTEGER,
        allowNull: false  
      },
      to: {
        type: Sequelize.INTEGER,
        allowNull: false  
      },
      blackList: {
        type: Sequelize.ARRAY(Sequelize.BOOLEAN)
      },
      favoriteList: {
        type: Sequelize.ARRAY(Sequelize.BOOLEAN)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('Conversations',  {
      type: 'unique',
      fields: ['from', 'to'],
      name: 'unique_from_to'
    }));
    ;
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Conversations');
  }
};