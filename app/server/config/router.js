var auth = require("./auth"),
    controllers = require("../controllers");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.redirect("/main");
    });

    app.get("/main", controllers.main.home);

    app.get("/register", controllers.users.getRegister);
    app.post("/register", controllers.users.postRegister);

    app.get("/login", controllers.users.getLogin);
    app.post("/login", auth.login);
    app.get("/logout", auth.logout);

    app.get("/logged", function (req, res) {
        res.render("logged");
    });

    app.get("/profile", function (req, res) {
        res.render("profile");
    });

    app.get("/test", function (req, res) {
        res.render("test-view");
    });

    app.get("/problem", function (req, res) {
        res.render("problem");
    });

    app.get("/dict", function (req, res) {
        res.render("dict");
    });

    app.get("*", function (req, res) {
        res.redirect("/main");
    });
};