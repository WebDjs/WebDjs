const constants = require("../common/constants");

module.exports = {
    home: (req, res) => {
        res.render("index");
    }
}