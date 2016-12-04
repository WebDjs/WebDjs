var controllers = require("../controllers");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.redirect("/warning");
    });

    app.get("/warning", controllers.main.warning);

    app.get("/main", controllers.main.home);

    // user registration and login routes
    app.get("/register", controllers.users.getRegister);
    app.post("/register", controllers.users.postRegister);

    app.get("/login", controllers.users.getLogin);
    app.post("/login", controllers.authentication.login);
    app.get("/logout", controllers.authentication.logout);

    // logged user routes
    app.get("/logged", controllers.main.homeLogged);

    app.get("/profile", controllers.users.getProfile);

    app.get("/test", controllers.questions.getTest);

    app.get("/tasks", controllers.tasks.getTasks);
    app.get("/single-task", controllers.tasks.singleTask);

    // dictionary routes
    app.get("/dict-not-logged", controllers.terms.getDictNotLogged);
    app.post("/dict-tag", controllers.terms.postTagNotLogged);
    app.post("/dict-current-title", controllers.terms.postTitleNotLogged);
    app.get("/dict", controllers.terms.getDict);
    app.post("/add", controllers.terms.postTerm);

    // anyone else
    app.get("*", function (req, res) {
        res.redirect("/warning");
    });
};