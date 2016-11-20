var encryption = require("../utilities/encryption");
var users = require("../data/users");

module.exports = {
    getRegister: (req, res, next) => {
       
    },
    postRegister: (req, res, next) => {
        let newUserData = req.body;

        if (newUserData.password != newUserData.confirmPassword) {
            req.session.error = "Passwords do not match!";
        }
        else {
            newUserData.salt = encryption.generateSalt();
            newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
            users.create(newUserData, (err, user) => {
                if (err) {
                    console.log(`Failed to register new user: ${err}`);
                    return;
                }

                req.logIn(user, (err) => {
                    if (err) {
                        res.status(400);
                        return res.send({ reason: err.toString() }); // TODO:
                    }
                    else {
                        res.redirect("/");
                    }
                })
            });
        }
    },
    getLogin: (req, res, next) => {
        
    }
};