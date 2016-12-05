const fs = require("fs");
const passport = require("passport");
const pathToUsername = "./server/common/username.txt";
const constantz = require("../common/constants");

module.exports = {
    login: function (req, res, next) {
        let auth = passport.authenticate("local", function (err, user) {
            if (err) {
                res.status(400);
                res.redirect("/error-login");
            }

            if (!user) {
                res.status(401);
                res.redirect("/error-login");
                return;
            }
            fs.writeFile(pathToUsername, req.body.username);

            req.logIn(user, function (err) {
                if (err) {
                    res.status(400);
                    res.redirect("/error-login");
                }
                fs.readFile("./server/common/username.txt", (err, data) => {
                    let dataUsername = data.toString();

                    res.status(200);
                    res.render("home-logged", { name: dataUsername, logos: constantz.logos });
                });
            })
        });

        auth(req, res, next);
    },
    logout: function (req, res, next) {
        fs.writeFile(pathToUsername, "");
        req.logout();
        res.redirect("/main");
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