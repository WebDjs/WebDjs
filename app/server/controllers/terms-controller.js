const fs = require("fs");
let data = require("../data"),
    constantz = require("../common/constants"),
    notifier = require("../utilities/notifier"),
    termsTag = "",
    terms = [],
    currentTerm = {},
    dataObj = {},
    tag;

let dataUser;

module.exports = {
    postTitleNotLogged: (req, res) => {
        let titleValue = req.body.data;

        data.terms.getTermsByTitle(titleValue)
            .then((result) => {
                currentTerm = result[0];
            });

        fs.readFile("./server/common/username.txt", (err, data) => {
            dataUser = data.toString();
        });

        if (dataUser === "") {
            res.redirect("/dict-not-logged");
        }
        else {
            res.redirect("/dict");
        }
    },
    postTagNotLogged: (req, res) => {
        tag = req.body.data;

        // " loading...".length = 11
        let len = tag.length - 11;
        termsTag = tag.substr(0, len);
        currentTerm = {};

        fs.readFile("./server/common/username.txt", (err, data) => {
            dataUser = data.toString();
        });

        if (dataUser === "") {
            console.log(dataUser);

            dataObj = {
                logoes: constantz.logos,
                terms: terms,
                currentTerm: currentTerm
            }
            res.render("dict-not-logged", dataObj);
        }
        else {
            console.log(dataUser);

            dataObj = {
                name: dataUser,
                logoes: constantz.logos,
                terms: terms,
                currentTerm: currentTerm
            };

            res.render("dict", dataObj);
        }
    },
    getDictNotLogged: (req, res) => {

        data.terms.getTermsByTag(termsTag)
            .then((result) => {
                terms = result;
                dataObj = {
                    logoes: constantz.logos,
                    terms: terms,
                    currentTerm: currentTerm
                }

                res.render("dict-not-logged", dataObj);
            });
    },
    getDict: (req, res) => {
        fs.readFile("./server/common/username.txt", (err, data) => {
            dataObj = {
                name: data.toString(),
                logoes: constantz.logos,
                terms: terms,
                currentTerm: currentTerm
            };
            res.render("dict", dataObj);
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