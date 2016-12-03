let mongoose = require("mongoose");

let requiredMessage = "{PATH} is required";

module.exports.init = function() {
    let questionSchema = mongoose.Schema({
        question: { type: String },
        answerA: { type: String },
        answerB: { type: String },
        answerC: { type: String },
        answerD: { type: String },
    });

    let Question = mongoose.model("Question", questionSchema);
};