let mongoose = require("mongoose");

let requiredMessage = "{PATH} is required";

module.exports.init = function() {
    let termSchema = mongoose.Schema({
        title: { type: String },
        description: { type: String },
        info: { type: String },
        examples: { type: String },
        tag: { type: String },
        date: { type: Date, default: Date.now() }
    });

    let Term = mongoose.model("Term", termSchema);
};



