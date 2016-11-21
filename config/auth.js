const passport = require("passport");
const notifier = require('node-notifier');

module.exports = {
    login: function (req, res, next) {
        let auth = passport.authenticate("local", function (err, user) {
            if (err) return next(err);
            if (!user) {
                notifier.notify({
                    title: "Exception",
                    message: "Wrong username or password!",
                    sound: false, // true | false.
                    time: 5000, // How long to show balloon in ms
                    wait: false, // Wait for User Action against Notification
                }, function (error, response) {
                    console.log(response);
                });
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
    }
};