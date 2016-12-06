let mongoose = require("mongoose"),
    encryption = require("../../utilities/encryption");

module.exports.init = function() {
    let userSchema = mongoose.Schema({
        username: { type: String, unique: true },
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
        }],
        role: { type: String, default: "novice" }
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


