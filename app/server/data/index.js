"use strict";
const questions = require("./services/questions"),
    tasks = require("./services/tasks"),
    terms = require("./services/terms"),
    users = require("./services/users");

module.exports = {
    users, questions, tasks, terms
}