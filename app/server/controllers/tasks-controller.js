let data = require("../data");
const constantz = require("../common/constants");

module.exports = {
    getTasks: (req, res, next) => {
        res.render("problem", { name: constantz.currentUsername});
    }
}