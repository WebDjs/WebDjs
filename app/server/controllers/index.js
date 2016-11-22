let mainController = require("./main-controller"),
    usersController = require("./users-controller"),
    termsController = require("./terms-controller"),
    tasksController = require("./tasks-controller"),
    questionsController = require("./questions-controller");

module.exports = {
    main: mainController,
    users: usersController,
    terms: termsController,
    tasks: tasksController,
    questions: termsController
};