
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      displayName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'anon.png',
      },
      role: {
        type: Sequelize.ENUM('customer', 'creator'),
        allowNull: false,
      },
      balance: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0,
      },
      accessToken: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      rating: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      
    })
      .then(() => queryInterface.addConstraint('Users',  {
        type: 'check',
        fields: ['balance'],
        where: {
          balance: {
            [ Sequelize.Op.gte ]: 0,
          },
        },
      }))
      
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.transaction(async (transaction) => {
     
      await queryInterface.sequelize.query('DROP TYPE IF EXISTS enum_Users_role;', {
        transaction
      });
      await queryInterface.changeColumn(
        'Users',
        'role',
        {
          type: Sequelize.ENUM(
            'ustomer', 'creator', 'moder'
          )
        },
        {
          transaction
        }
      );
    })
    return queryInterface.dropTable('Users');
  },
};
