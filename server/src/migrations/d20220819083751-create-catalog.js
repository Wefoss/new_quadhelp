'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Catalogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      chats: {
        type: Sequelize.ARRAY({ 
          type: Sequelize.INTEGER, 
          references: {
            model: 'Conversations',
            key: 'id',
          },
        }),
        allowNull: false,
       
      },
      catalogName: {
        type: Sequelize.STRING
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
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Catalogs');
  }
};