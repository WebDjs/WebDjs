var mongoose = require("mongoose");

var requiredMessage = "{PATH} is required";

module.exports.init = function() {
    var eventSchema = mongoose.Schema({
        title: { type: String, required: requiredMessage },
        description: { type: String, required: requiredMessage },
        category: { type: String, required: requiredMessage },
        date: { type: Date, required: requiredMessage },
        creator: { type: String, required: requiredMessage }
    });

    var Event = mongoose.model("Event", eventSchema);
};



