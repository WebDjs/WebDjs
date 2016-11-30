let Term = require("mongoose").model("Term");

module.exports = {
    getAllTerms() {
        return new Promise((resolve, reject) => {
            Term.find((err, terms) => {
                if (err) {
                    return reject(err);
                }

                return resolve(terms);
            });
        });
    },
    getTermsByTag(tag) {
        return new Promise((resolve, reject) => {
            Term.find({ tag: tag }, (err, terms) => {
                if (err) {
                    return reject(err);
                }

                return resolve(terms);
            });
        });
    },
    getTermsByTitle(title) {
        return new Promise((resolve, reject) => {
            Term.find({ title: title }, (err, terms) => {
                if (err) {
                    return reject(err);
                }

                return resolve(terms);
            });
        });
    },
    createTerm(newTerm, callback) {
        Term.create(newTerm, callback);
    }
}