let data = require("../data"),
    constantz = require("../common/constants");
let notifier = require("../utilities/notifier");

module.exports = {
    getDict: (req, res, next) => {
        res.render("dict", { name: constantz.currentUsername});
    },
    postTerm: (req, res) => {
        let newTerm = req.body;

        data.terms.createTerm(newTerm, (err, term) => {
            if (err) {
                console.log("Failed to add new term: " + err);
                //return res.send({ reason: err.toString() });
                notifier.error("Failed to add new term: " + err);
            }
            notifier.success("Term added!");
            res.redirect("/dict");
        });
    }
};