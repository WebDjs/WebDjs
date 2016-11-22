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

    app.get("/logged", controllers.main.logged);

    app.get("/logout", auth.logout);

    app.get("/profile", controllers.users.getProfile);

    app.get("/test", controllers.questions.getTest);

    app.get("/problem", controllers.tasks.getTasks);

    app.get("/dict", controllers.terms.getDict);

    app.get("*", function (req, res) {
        res.redirect("/main");
    });
};