let mongoose = require("mongoose");

module.exports.init = function () {
    let taskSchema = mongoose.Schema({
        title: { type: String },
        description: { type: String },
        category: { type: String },
        date: { type: Date, default: Date.now() },
        creator: { type: String }
    });

    let Task = mongoose.model("Task", taskSchema);
};

