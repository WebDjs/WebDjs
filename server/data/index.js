"use strict";

const users = require("./services/users"),
    questions = require("./services/questions"),
    tasks = require("./services/tasks"),
    terms = require("./services/terms");

module.exports = {
    users,
    questions,
    tasks,
    terms
}