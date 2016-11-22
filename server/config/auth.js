const passport = require("passport");
const notifier = require("../utilities/notifier");

module.exports = {
    login: function (req, res, next) {
        let auth = passport.authenticate("local", function (err, user) {
            if (err) return next(err);
            if (!user) {
                notifier.error("Username or password wrong!");
            }

            req.logIn(user, function (err) {
                if (err) return next(err);
                res.redirect('/logged');
            })
        });

        auth(req, res, next);
    },
    logout: function (req, res, next) {
        req.logout();
        res.redirect('/');
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