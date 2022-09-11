'use strict';

module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    from: {type: DataTypes.INTEGER, allowNull: false},
    to: {type: DataTypes.INTEGER, allowNull: false},
    blackList: DataTypes.ARRAY(DataTypes.BOOLEAN),
    favoriteList: DataTypes.ARRAY(DataTypes.BOOLEAN),
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
     },
)
Conversation.associate = function (models) {
  Conversation.hasMany(models.Catalog, { foreignKey: 'conversation_id', targetKey: 'id' });
};

Conversation.associate = function (models) {
  Conversation.hasMany(models.Message, { foreignKey: 'conversation_id', targetKey: 'id' });
};

  return Conversation;
};