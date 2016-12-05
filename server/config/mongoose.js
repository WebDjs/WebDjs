/* globals require module Promise */

let mongoose = require("mongoose"),
    UserModel = require("../data/models/User"),
    QuestionModel = require("../data/models/Question"),
    TaskModel = require("../data/models/Task"),
    TermModel = require("../data/models/Term");

module.exports = function(params) {
    // (node:4960) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, 
    // plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
    // solution:
    mongoose.Promise = global.Promise;

    mongoose.connect(params.db);
    let db = mongoose.connection;

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