let mongoose = require("mongoose");

module.exports.init = function() {
    let questionSchema = mongoose.Schema({
        tag: { type: String },
        question: { type: String },
        answerA: { type: String },
        answerB: { type: String },
        answerC: { type: String },
        answerD: { type: String },
        correct: { type: String },
    });

    let Question = mongoose.model("Question", questionSchema);
};