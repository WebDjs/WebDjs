let terms = require("../data/terms"),
    constants = require("../common/constants");
let CONTROLLER_NAME = "events";

module.exports = {
    getCreate: (req, res) => {
        if (!req.user.phoneNumber) {
            // req.session.error = "Sorry...";
            // res.render(CONTROLLER_NAME + "/users/profile"); // TODO:
        }

        res.render(CONTROLLER_NAME + "/create", {
            categories: constants.categories,
            initiatives: constants.initiatives,
            seasons: constants.seasons
        });
    },
    postCreate: (req, res) => {
        let term = req.body;
        let user = req.user;
        terms.create(
            term,
            {
                username: user.username,
                phoneNumber: user.phoneNumber
            },
            (err, event) => {
                if (err) {
                    let data = {
                        categories: constants.categories,
                        initiatives: constants.initiatives,
                        seasons: constants.seasons,
                        errorMessage: err
                    };
                    res.render(CONTROLLER_NAME + "/create", data);
                }
                else {
                    res.redirect("/events/details/" + event._id);
                }
            })
    },
    getActive: (req, res) => {
        let page = req.query.page;
        let pageSize = req.query.pageSize;

        terms.active(page, pageSize, ["Public"], ["None"], function (err, data) {
            res.render(CONTROLLER_NAME + "/active", {
                data: data
            });
        });
    }
};