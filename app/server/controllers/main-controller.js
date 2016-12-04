const fs = require("fs"),
    constantz = require("../common/constants");

module.exports = {
    home: (req, res, next) => {
        res.render("home", { logos: constantz.logos });
    },
    homeLogged: (req, res, next) => {
        fs.readFile("./server/common/username.txt", (err, data) => {
            res.render("home-logged", { name: data.toString(), logos: constantz.logos });
        });
    },
    warning: (req, res, next) => {
        res.render("warning");
    },
}