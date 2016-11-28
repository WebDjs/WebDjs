const constantz = require("../common/constants");
let data = require("../data");

module.exports = {
    getTest: (req, res, next) => {
        res.render("test", { name: constantz.currentUsername});
    }
}