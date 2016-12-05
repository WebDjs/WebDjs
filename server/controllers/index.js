let main = require("./main-controller"),
    users = require("./users-controller"),
    terms = require("./terms-controller"),
    tasks = require("./tasks-controller"),
    questions = require("./questions-controller"),
    authentication = require("./authentication-controller");

module.exports = {
    main,
    users,
    terms,
    tasks,
    questions,
    authentication
};