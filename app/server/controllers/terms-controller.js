const fs = require("fs");
let data = require("../data"),
    constantz = require("../common/constants"),
    notifier = require("../utilities/notifier"),
    tag = "",
    terms = [],
    currentTerm = {};

module.exports = {
    postTitle: (req, res) => {
        let titleValue = req.body.data;

        data.terms.getTermsByTitle(titleValue)
            .then((result) => {
                currentTerm = result[0];
                console.log(currentTerm);

                res.redirect("/dict-not-logged");
            });
    },
    postTag: (req, res, next) => {
        let dataValue = req.body.data;
        let len = dataValue.length - 6;
        tag = dataValue.substr(0, len);
        res.render("dict-not-logged", { logoes: constantz.logos, terms: terms, currentTerm: currentTerm });
        next();
    },
    getDictNotLogged: (req, res,  next) => {
        data.terms.getTermsByTag(tag)
            .then((result) => {
                terms = result;
                res.render("dict-not-logged", { logoes: constantz.logos, terms: terms, currentTerm: currentTerm });
                next();
            });
    },
    getDict: (req, res) => {
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