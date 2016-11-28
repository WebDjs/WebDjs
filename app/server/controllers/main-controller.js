const constants = require("../common/constants");

module.exports = {
    home: (req, res, next) => {
        res.render("index");
    },
    // logged: (req, res, next) => {
    //     res.render("logged");
    // },
    error: (req, res, next) => {
        res.render("error");
    }
}