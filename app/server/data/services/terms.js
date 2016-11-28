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
    getTermById(id) {
        return new Promise((resolve, reject) => {
            Term.findOne({ _id: id }, (err, term) => {
                if (err) {
                    return reject(err);
                }

                return resolve(term);
            });
        });
    },
    createTerm(newTerm, callback) {
        Term.create(newTerm, callback);
    }
}