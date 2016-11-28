var mongoose = require("mongoose"),
    UserModel = require("../data/models/User"),
    QuestionModel = require("../data/models/Question"),
    TaskModel = require("../data/models/Task"),
    TermModel = require("../data/models/Term");

module.exports = function(params) {
    mongoose.Promise = global.Promise;
    mongoose.connect(params.db);
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
    QuestionModel.init();
    TaskModel.init();
    TermModel.init();
};