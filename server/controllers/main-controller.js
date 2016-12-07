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
        let data = {
            message: constantz.messages.warning,
            route: "/main"
        }

        res.render("notifications/warning", data);
    },
    errorRegister: (req, res, next) => {
        let data = {
            message: constantz.messages.errorRegister,
            route: "/register"
        }

        res.render("notifications/error", data);
    },
    errorLogin: (req, res, next) => {
        let data = {
            message: constantz.messages.errorLogin,
            route: "/login"
        }

        res.render("notifications/error", data);
    },
    errorAdd: (req, res, next) => {
        let data = {
            message: constantz.messages.errorAdd,
            route: "/dict"
        }

        res.render("notifications/error-logged", data);
    },
    errorSameAdd: (req, res, next) => {
        let data = {
            message: constantz.messages.errorSameAdd,
            route: "/dict"
        }

        res.render("notifications/error-logged", data);
    },
    successAdd: (req, res, next) => {
        let data = {
            message: constantz.messages.successAdd,
            route: "/dict"
        }

        res.render("notifications/success-logged", data);
    },
    errorDelEdit: (req, res, next) => {
        let data = {
            message: constantz.messages.errorNotPro,
            route: "/dict"
        }

        res.render("notifications/error-logged", data);
    },
    errordelete: (req, res, next) => {
        let data = {
            message: constantz.messages.errorDelete,
            route: "/dict"
        }

        res.render("notifications/error-logged", data);
    },
    successDelete: (req, res, next) => {
        let data = {
            message: constantz.messages.successDelete,
            route: "/dict"
        }

        res.render("notifications/success-logged", data);
    }
}