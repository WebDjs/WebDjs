let mongoose = require("mongoose"),
    encryption = require("../../utilities/encryption");

let requiredMessage = "{PATH} is required";

module.exports.init = function() {
    let userSchema = mongoose.Schema({
        username: { type: String, required: requiredMessage, unique: true },
        salt: String,
        hashPass: String,
        email: { type: String },
        results: [{
            test: {
                title: String,
                time: Number,
                result: String
            },
            task: {
                title: String,
                time: Number,
                result: String
            }
        }]
    });

    userSchema.method({
        authenticate: function(password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                return true;
            }
            else {
                return false;
            }
        }
    });

    let User = mongoose.model("User", userSchema);
};


