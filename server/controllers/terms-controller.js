/* globals require module Promise */
"use strict";

const fs = require("fs");
let data = require("../data"),
    constantz = require("../common/constants"),
    termsTag = "",
    terms = [],
    currentTerm = {},
    dataObj = {},
    tag,
    dataUser;

function dataUsername() {
    return new Promise((resolve, reject) => {
        fs.readFile("./server/common/username.txt", "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        })
    });
}

module.exports = {
    postTitleNotLogged: (req, res) => {
        let titleValue = req.body.data;

        data.terms.getTermsByTitle(titleValue)
            .then((result) => {
                currentTerm = result[0];
            }).catch(err => console.log(err));;

        res.redirect("/dict-not-logged");
    },
    postTagNotLogged: (req, res) => {
        tag = req.body.data;

        // " loading...".length = 11
        let len = tag.length - 11;
        termsTag = tag.substr(0, len);

        dataObj = {
            name: dataUser,
            logoes: constantz.logos,
            terms: terms,
            currentTerm: {}
        };

        res.render("dict-not-logged", dataObj);
    },
    getDictNotLogged: (req, res) => {
        data.terms.getTermsByTag(termsTag)
            .then((result) => {
                terms = result;
                dataObj = {
                    logoes: constantz.logos,
                    terms: terms || [],
                    currentTerm: currentTerm || {}
                }

                res.render("dict-not-logged", dataObj);
            }).catch(err => console.log(err));
    },
    getDict: (req, res) => {
        data.terms.getTermsByTag(termsTag)
            .then((result) => {
                terms = result;
                dataUser = dataUsername()
                    .then(data => {
                        dataObj = {
                            name: data,
                            logoes: constantz.logos,
                            terms: terms || [],
                            currentTerm: currentTerm || {}
                        }

                        res.render("dict", dataObj);
                    });
            }).catch((err) => console.log("There is err" + err));
    },
    postTerm: (req, res) => {
        let newTerm = req.body;

        if (newTerm.title !== "" && newTerm.description !== "") {
            data.terms.getTermsByTitle(newTerm.title)
                .then((result) => {
                    if (result.length < 1) {
                        data.terms.createTerm(newTerm, (err, term) => {
                            if (err) {
                                console.log("Failed to add new term: " + err);
                                res.status(400);
                                res.redirect("/error-add");
                            }
                            else {
                                res.status(200);
                                res.redirect("/success-add");
                            }
                        });
                    }
                    else {
                        res.status(400);
                        res.redirect("/error-same-add");
                    }
                }).catch(err => console.log(err));
        }
        else {
            res.status(400);
            res.redirect("/error-add");
        }
    },
    postTermToDelete: (req, res) => {
        let titleValue = req.body.data;

        data.terms.deleteTerm(titleValue)
            .then(() => {
                res.redirect("/dict");
            })
            .catch(err => console.log(err));
    },
    postTermToEdit: (req, res) => {
        let titleValue = req.body.data;

        // data.terms.getTermsByTitle(titleValue)
        //     .then((result) => {
        //         currentTerm = result[0];
        //     });
    }
};
