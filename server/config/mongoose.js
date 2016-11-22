var mongoose = require("mongoose"),
    UserModel = require("../data/models/User"),
    TermModel = require("../data/models/Term");

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.on("error", function(err){
        console.log("Database error: " + err);
    });

    db.once("open", function(err) {
        if (err) {
            console.log("Database could not be opened: " + err);
            return;
        }

        console.log("Database up and running...")
    });

    UserModel.init();
    TermModel.init();
};