const ForumModel = require('./forum/forum.model')
const UserModel = require("./Users/users");
const MessaguesModel = require('./messages/messages.model')


MessaguesModel.belongsTo(ForumModel, { foreignKey: "forum_id" });
ForumModel.hasMany(MessaguesModel, { foreignKey: "forum_id" });

MessaguesModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(MessaguesModel, { foreignKey: "user_id" });



module.exports = {
    MessaguesModel,
    UserModel,
    ForumModel
};
