var auth = require("./auth"),
    controllers = require("../controllers");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/register", controllers.users.getRegister);
    app.post("/register", controllers.users.postRegister);

    app.get("/login", controllers.users.getLogin);
    app.post("/login", auth.login);
    app.get("/logout", auth.logout);


    app.get("/profile", function (req, res) {
        res.render("user/profile");
    });

    app.get("/main-logged", function (req, res) {
        res.render("main-logged");
    });

    app.get("/dict", function (req, res) {
        res.render("dict");
    });

    app.get("*", function (req, res) {
        res.render("index");
    });
};