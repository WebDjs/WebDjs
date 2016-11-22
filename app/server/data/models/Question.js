let mongoose = require("mongoose");

let requiredMessage = "{PATH} is required";

module.exports.init = function() {
    let questionSchema = mongoose.Schema({
        title: { type: String, required: requiredMessage },
        description: { type: String, required: requiredMessage },
        category: { type: String, required: requiredMessage },
        date: { type: Date, required: requiredMessage },
        creator: { type: String, required: requiredMessage }
    });

    let Question = mongoose.model("Question", questionSchema);
};