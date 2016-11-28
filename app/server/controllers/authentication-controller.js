const fs = require("fs");
const passport = require("passport");
const notifier = require("../utilities/notifier");
const pathToUsername = "./server/common/username.txt";
const constantz = require("../common/constants");

module.exports = {
    login: function (req, res, next) {
        let auth = passport.authenticate("local", function (err, user) {
            if (err) {
                //res.redirect("/error");
                notifier.error(err.toString());
            }

            if (!user) {
                notifier.error("Wrong username or password!");
                return;
            }
            fs.writeFile(pathToUsername, req.body.username);

            req.logIn(user, function (err) {
                if (err) {
                    //res.redirect("/error");
                    notifier.error(err.toString());
                }
                fs.readFile("./server/common/username.txt", (err, data) => {
                    res.render("logged", { logoes: constantz.logos, name: data.toString() });
                });
            })
        });

        auth(req, res, next);
    },
    logout: function (req, res, next) {
        //fs.writeFile(pathToUsername, "");
        req.logout();
        res.redirect("/");
    },
    isAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            res.redirect("/login");
        }
        else {
            next();
        }
    },
    isInRole: function (role) {
        return function (req, res, next) {
            if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
                next();
            }
            else {
                res.status(403);
                res.end();
            }
        }
    }
};