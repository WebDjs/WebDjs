let User = require("mongoose").model("User");

module.exports = {
    create: (user, callback) => {
        User.create(user, callback);
    }
};