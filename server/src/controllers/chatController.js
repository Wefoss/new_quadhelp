const moment = require("moment");
const db = require("../models");
const userQueries = require("./queries/userQueries");
const controller = require("../socketInit");
const _ = require("lodash");
const { Op } = require("sequelize");
const BadRequestError = require('../errors/BadRequestError')


module.exports.addMessage = async (req, res, next) => {
  const participants = [req.tokenData.userId, req.body.recipient];
  participants.sort(
    (participant1, participant2) => participant1 - participant2
  );
  try {
    const [newConv] = await db.Conversation.findCreateFind({
      where: { from: participants[0], to: participants[1] },
      defaults: {
        from: participants[0],
        to: participants[1],
        blackList: [false, false],
        favoriteList: [false, false],
      },
    });
  
 
    const body = {
      userId: req.tokenData.userId,
      conversationId: newConv.dataValues.id,
      body: req.body.messageBody,
    };

    const message = await db.Message.create(body).then(({ dataValues }) => {
      const newMessage = {
        _id: dataValues.id,
        sender: dataValues.userId,
        body: dataValues.body,
        conversation: dataValues.conversationId,
        createdAt: dataValues.createdAt,
        updatedAt: dataValues.updatedAt,
        participants: participants,
      };
      return newMessage;
    });

    const interlocutorId = participants.filter(
      (participant) => participant !== req.tokenData.userId
    )[0];
    const preview = {
      _id: newConv.dataValues.id,
      sender: req.tokenData.userId,
      text: req.body.messageBody,
      createAt: message.createdAt,
      participants,
      blackList: newConv.dataValues.blackList,
      favoriteList: newConv.dataValues.favoriteList,
    };
    controller.getChatController().emitNewMessage(interlocutorId, {
      message,
      preview: {
        _id: newConv.dataValues.id,
        sender: req.tokenData.userId,
        text: req.body.messageBody,
        createAt: message.createdAt,
        participants,
        blackList: newConv.dataValues.blackList,
        favoriteList: newConv.dataValues.favoriteList,
        interlocutor: {
          id: req.tokenData.userId,
          firstName: req.tokenData.firstName,
          lastName: req.tokenData.lastName,
          displayName: req.tokenData.displayName,
          avatar: req.tokenData.avatar,
          email: req.tokenData.email,
        },
      },
    });

    res.status(200).send({
      message,
      preview: Object.assign(preview, { interlocutor: req.body.interlocutor }),
    });
  } catch (err) {
    next(new BadRequestError());
    
  }
};

module.exports.getChat = async (req, res, next) => {
  const participants = [req.tokenData.userId, req.body.interlocutorId];
  participants.sort(
    (participant1, participant2) => participant1 - participant2
  );
  try {
    const [{ dataValues }] = await db.Conversation.findCreateFind({
      where: {
        from: participants[0],
        to: participants[1],
      },
      defaults: {
        from: participants[0],
        to: participants[1],
        blackList: [false, false],
        favoriteList: [false, false],
      },
    });
    const messages = [];
    const allMessage = await db.Message.findAll({
      where: {
        conversationId: dataValues.id,
      },
    }).then((data) =>
      data.forEach((el) => {
        const subObj = {
          _id: el.dataValues.id,
          sender: el.dataValues.userId,
          body: el.dataValues.body,
          conversation: el.dataValues.conversationId,
          createdAt: el.dataValues.createdAt,
          updatedAt: el.dataValues.updatedAt,
        };
        return messages.push(subObj);
      })
    );

    const interlocutor = await userQueries.findUser({
      id: req.body.interlocutorId,
    });
    res.send({
      messages,
      interlocutor: {
        firstName: interlocutor.firstName,
        lastName: interlocutor.lastName,
        displayName: interlocutor.displayName,
        id: interlocutor.id,
        avatar: interlocutor.avatar,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getPreview = async (req, res, next) => {
  try {
    let conversations = [];
    const message = await db.Message.findAll({ raw: true });
    const [convers] = await db.Conversation.findAll({
      where: {
        [Op.or]: [
          {
            from: req.tokenData.userId,
          },
          {
            to: req.tokenData.userId,
          },
        ],
      },
      include: [
        {
          model: db.Message,
        },
      ],
    });

    if (!convers) return;

    if (message.length && convers.dataValues.Messages.length) {
      const currentConversation = await db.Conversation.findAll({
        where: {
          [Op.or]: [
            {
              from: req.tokenData.userId,
            },
            {
              to: req.tokenData.userId,
            },
          ],
        },
        include: [
          {
            model: db.Message,
          },
        ],
      }).then(([data]) => {
        const {
          dataValues: { Messages },
        } = data;
        let mes = Messages.pop();
        const subObj = {
          _id: data.dataValues.id,
          sender: mes.dataValues.userId,
          text: mes.dataValues.body,
          createdAt: mes.dataValues.createdAt,
          participants: Array(data.dataValues.from, data.dataValues.to),
          blackList: data.dataValues.blackList,
          favoriteList: data.dataValues.favoriteList,
        };
        return conversations.push(subObj);
      });

      const interlocutors = [];
      conversations.forEach((conversation) => {
        interlocutors.push(
          conversation.participants.find(
            (participant) => participant !== req.tokenData.userId
          )
        );
      });
      const senders = await db.Users.findAll({
        where: {
          id: interlocutors,
        },
        attributes: ["id", "firstName", "lastName", "displayName", "avatar"],
      });
      conversations.forEach((conversation) => {
        senders.forEach((sender) => {
          if (conversation.participants.includes(sender.dataValues.id)) {
            conversation.interlocutor = {
              id: sender.dataValues.id,
              firstName: sender.dataValues.firstName,
              lastName: sender.dataValues.lastName,
              displayName: sender.dataValues.displayName,
              avatar: sender.dataValues.avatar,
            };
          }
        });
      });
    }
    res.send(conversations);
  } catch (err) {
    next(err);
  }
};

module.exports.blackList = async (req, res, next) => {
  const ps = req.body.participants.sort(
    (participant1, participant2) => participant1 - participant2
  );

  try {
    const UpdatedBlackList = {
      blackList: [false, false].map((el, i) =>
        i === req.body.participants.indexOf(req.tokenData.userId)
          ? el === !req.body.blackListFlag
          : el
      ),
    };
    const updatedChat = await db.Conversation.update(UpdatedBlackList, {
      where: {
        from: ps[0],
        to: ps[1],
      },
      returning: true,
    }).then(([row, [{ dataValues }]]) => {
      const subObj = {
        participants: [dataValues.from, dataValues.to],
        blackList: dataValues.blackList,
        favoriteList: dataValues.favoriteList,
        _id: dataValues.id,
        createdAt: dataValues.createdAt,
        updatedAt: dataValues.updatedAt,
      };
      return subObj;
    });
    res.send(updatedChat);
    const interlocutorId = req.body.participants.filter(
      (participant) => participant !== req.tokenData.userId
    )[0];
    controller
      .getChatController()
      .emitChangeBlockStatus(interlocutorId, updatedChat);
  } catch (err) {
    res.send(err);
  }
};

module.exports.favoriteChat = async (req, res, next) => {
  try {
    const updatedFavoriteList = {
      favoriteList: [false, false].map((el, i) =>
        i === req.body.participants.indexOf(req.tokenData.userId)
          ? el === !req.body.favoriteFlag
          : el
      ),
    };

    const updatedChat = await db.Conversation.update(updatedFavoriteList, {
      where: {
        from: req.body.participants[0],
        to: req.body.participants[1],
      },
      returning: true,
    }).then(([row, [{ dataValues }]]) => {
      const subObj = {
        participants: [dataValues.from, dataValues.to],
        blackList: dataValues.blackList,
        favoriteList: dataValues.favoriteList,
        _id: dataValues.id,
        createdAt: dataValues.createdAt,
        updatedAt: dataValues.updatedAt,
      };
      return subObj;
    });

    res.send(updatedChat);
  } catch (err) {
    res.send(err);
  }
};

module.exports.createCatalog = async (req, res, next) => {
  try {
    const obj = {
      userId: req.tokenData.userId,
      catalogName: req.body.catalogName,
      chats: [req.body.chatId],
    };

    const newCatalog = await db.Catalog.create(obj);
    res.send(newCatalog.dataValues);
  } catch (err) {
    next(err);
  }
};

module.exports.updateNameCatalog = async (req, res, next) => {
  try {
    const [row, [calatog]] = await db.Catalog.update(
      { catalogName: req.body.catalogName },
      {
        where: {
          id: req.body.catalogId,
          userId: req.tokenData.userId,
        },
        returning: true,
      }
    );
    res.send(calatog);
  } catch (err) {
    next(err);
  }
};

module.exports.addNewChatToCatalog = async (req, res, next) => {
  try {
    const test = await db.Catalog.findOne({
      where: {
        id: req.body.catalogId,
        userId: req.tokenData.userId,
      },
    });
    if (!test.dataValues.chats.includes(req.body.chatId)) {
      test.dataValues.chats.push(req.body.chatId);
    }

    const [row, [newCatalog]] = await db.Catalog.update(
      { chats: test.dataValues.chats },
      {
        where: {
          id: req.body.catalogId,
          userId: req.tokenData.userId,
        },
        returning: true,
      }
    );

    res.send(newCatalog);
  } catch (err) {
    next(err);
  }
};

module.exports.removeChatFromCatalog = async (req, res, next) => {
  try {
    const checkCatalog = await db.Catalog.findOne({
      where: {
        id: req.body.catalogId,
        userId: req.tokenData.userId,
      },
    });
    const updatedArray = checkCatalog.dataValues.chats.indexOf(req.body.chatId);
    checkCatalog.dataValues.chats.splice(updatedArray, 1);

    const [row, [updateCatalog]] = await db.Catalog.update(
      { chats: checkCatalog.dataValues.chats },
      {
        where: {
          id: req.body.catalogId,
          userId: req.tokenData.userId,
        },
        returning: true,
      }
    );
    res.send(updateCatalog);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteCatalog = async (req, res, next) => {
  try {
    const catalog = await db.Catalog.findByPk(req.body.catalogId);
    catalog.destroy();
    res.end();
  } catch (err) {
    next(err);
  }
};

module.exports.getCatalogs = async (req, res, next) => {
  try {
    const arrayOfCatalog = [];
    const getCatalog = await db.Catalog.findAll({
      where: { userId: req.tokenData.userId },
    }).then((data) =>
      data.forEach((el) => {
        const subObj = {
          _id: el.dataValues.id,
          catalogName: el.dataValues.catalogName,
          chats: el.dataValues.chats,
        };
        return arrayOfCatalog.push(subObj);
      })
    );

    res.send(arrayOfCatalog);
  } catch (err) {
    next(err);
  }
};
