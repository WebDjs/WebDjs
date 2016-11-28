let encryption = require("../utilities/encryption");
let notifier = require("../utilities/notifier");
let data = require("../data");

let CONTROLLER_NAME = "users";

module.exports = {
    getRegister: function (req, res, next) {
        res.render(CONTROLLER_NAME + "/register")
    },
    postRegister: function (req, res, next) {
        let newUserData = req.body;

        if (newUserData.password != newUserData.confirmPassword) {
            req.session.error = "Passwords do not match!";
            res.redirect("/register");
            notifier.error("Passwords do not match!");
        }
        else {
            newUserData.salt = encryption.generateSalt();
            newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
            data.users.create(newUserData, function (err, user) {
                if (err) {
                    console.log("Failed to register new user: " + err);
                    return;
                }

                req.logIn(user, function (err) {
                    if (err) {
                        res.status(400);
                        notifier.error(err.toString());
                    }
                    else {
                        res.render("logged", { name: newUserData.username });
                        notifier.success("User registered!");
                    }
                })
            });
        }
    },
    getLogin: function (req, res, next) {
        res.render(CONTROLLER_NAME + "/login");
    },
    getProfile: function (req, res, next) {
        res.render(CONTROLLER_NAME + "/profile");
    }
};