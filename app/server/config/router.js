var controllers = require("../controllers");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.redirect("/main");
    });

    app.get("/main", controllers.main.home);

    app.get("/register", controllers.users.getRegister);
    app.post("/register", controllers.users.postRegister);

    app.get("/login", controllers.users.getLogin);
    app.post("/login", controllers.authentication.login);
    app.get("/logout", controllers.authentication.logout);

    app.get("/logged");

    app.get("/profile", controllers.users.getProfile);

    app.get("/test", controllers.questions.getTest);

    app.get("/tasks", controllers.tasks.getTasks);

    app.get("/dict", controllers.terms.getDict);

    app.post("/add", controllers.terms.postTerm);

    app.get("*", function (req, res) {
        res.redirect("/main");
    });
};