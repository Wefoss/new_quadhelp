'use strict';

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
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
    conversationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {type: DataTypes.STRING, allowNull: false, validate: {notNull: true, notEmpty: true,}},
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
Message.associate = function (models) {
  Message.belongsTo(models.Conversation, { foreignKey: 'conversation_id', targetKey: 'id' });
};
Message.associate = function (models) {
  Message.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id' });
};

  return Message;
};