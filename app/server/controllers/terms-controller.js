const fs = require("fs");
let data = require("../data"),
    constantz = require("../common/constants"),
    notifier = require("../utilities/notifier"),
    termsTag = "",
    terms = [],
    currentTerm = {};

module.exports = {
    postTitleNotLogged: (req, res) => {
        let titleValue = req.body.data;

        data.terms.getTermsByTitle(titleValue)
            .then((result) => {
                currentTerm = result[0];

                res.redirect("/dict-not-logged");
            });
    },
    postTagNotLogged: (req, res) => {
        termsTag = req.body.data;
        currentTerm = {};

        res.render("dict-not-logged", { logoes: constantz.logos, terms: terms, currentTerm: currentTerm });
    },
    getDictNotLogged: (req, res) => {
        
        data.terms.getTermsByTag(termsTag)
            .then((result) => {
                terms = result;
                
                res.render("dict-not-logged", { logoes: constantz.logos, terms: terms, currentTerm: currentTerm });
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