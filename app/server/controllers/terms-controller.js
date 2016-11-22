let data = require("../data"),
    constants = require("../common/constants");

module.exports = {
    getDict: (req, res, next) => {
        res.render("dict");
    }
};