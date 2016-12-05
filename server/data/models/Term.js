const mongoose = require("mongoose"),
    constantz = require("../../common/constants");

module.exports.init = function () {
    let termSchema = mongoose.Schema({
        title: { type: String },
        description: { type: String },
        info: { type: String },
        examples: { type: String },
        tag: { type: String },
        image: { type: String, default: constantz.defaultImageUrl },
        date: { type: Date, default: Date.now() }
    });

    let Term = mongoose.model("Term", termSchema);
};



