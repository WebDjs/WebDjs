let data = require("../data");
const constantz = require("../common/constants");
const fs = require("fs");

module.exports = {
    getTasks: (req, res, next) => {
        fs.readFile("./server/common/username.txt", (err, data) => {
            res.render("tasks", { name: data.toString() });
        });
    },
    singleTask: (req, res, next) => {
        fs.readFile("./server/common/username.txt", (err, data) => {
            console.log('hi');
            
            res.render("single-task", { name: data.toString() });
        });
    }
}