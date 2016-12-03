const constantz = require("../common/constants");
let data = require("../data");
const fs = require("fs");

module.exports = {
    getTest: (req, res, next) => {
        fs.readFile("./server/common/username.txt", (err, data) => {
            res.render("test", { name: data.toString(), logos: constantz.logos });
        });
    }
}