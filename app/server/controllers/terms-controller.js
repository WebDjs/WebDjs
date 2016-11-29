let data = require("../data"),
    constantz = require("../common/constants");
let notifier = require("../utilities/notifier");
const fs = require("fs");

module.exports = {
    getDictNotLogged: (req, res, next) => {
        res.render("dict-not-logged", { logoes: constantz.logos });
    },
    getDict: (req, res, next) => {
        fs.readFile("./server/common/username.txt", (err, data) => {
            res.render("dict", { name: data.toString(), logoes: constantz.logos });
        });
    },
    postTerm: (req, res) => {
        let newTerm = req.body;

        if (newTerm.title !== "" && newTerm.description !== "") {
            data.terms.createTerm(newTerm, (err, term) => {
                if (err) {
                    console.log("Failed to add new term: " + err);
                    //return res.send({ reason: err.toString() });
                    notifier.error("Failed to add new term: " + err);
                    res.status(400);
                }
                notifier.success("Term added!");
                res.status(200);
                res.redirect("/dict");
            });
        }
        else {
            notifier.error("Title and description must not be empty!");
            res.status(400);
        }
    }
};