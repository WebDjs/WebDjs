const constantz = require("../common/constants");

module.exports = {
    home: (req, res, next) => {
        res.render("home", { logos: constantz.logos });
    }
}