'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catalog = sequelize.define('Catalog', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chats: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    catalogName: {type: DataTypes.STRING, allowNull: false},
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
   },
 
);



Catalog.associate = function (models) {
    Catalog.belongsTo(models.User, { foreignKey: 'user_id'});
  };

  Catalog.associate = function (models) {
    Catalog.belongsTo(models.Conversation, { foreignKey: 'conversation_id'});
  };
  

  return Catalog;
};


