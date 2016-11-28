const passport = require("passport");
const notifier = require("../utilities/notifier");

module.exports = {
    login: function (req, res, next) {
        let auth = passport.authenticate("local", function (err, user) {
            if (err) {
                //res.redirect("/error");
                notifier.error(err.toString());
            }

            if (!user) {
                notifier.error("Wrong username or password!");
            }

            req.logIn(user, function (err) {
                if (err) {
                    //res.redirect("/error");
                    notifier.error(err.toString());
                }
                res.render("logged", { name: req.body.username } );
            })
        });

        auth(req, res, next);
    },
    logout: function (req, res, next) {
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