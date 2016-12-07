"use strict";
let controllers = require("../controllers");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.redirect("/warning");
    });

    app.get("/main", controllers.main.home);

    // notifications
    app.get("/warning", controllers.main.warning);
    app.get("/error-register", controllers.main.errorRegister);
    app.get("/error-login", controllers.main.errorLogin);
    app.get("/error-add", controllers.main.errorAdd);
    app.get("/error-same-add", controllers.main.errorSameAdd);
    app.get("/success-add", controllers.main.successAdd);
    app.get("/error-not-pro", controllers.main.errorDelEdit);
    //app.get("/error-delete", controllers.main.errorDelete);
    //app.get("/success-delete", controllers.main.successDelete);

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
    app.get("/dict", controllers.terms.getDict);
    app.post("/dict-tag", controllers.terms.postTagNotLogged);
    app.post("/dict-current-title", controllers.terms.postTitleNotLogged);
    app.post("/add", controllers.terms.postTerm);
    app.post("/delete", controllers.terms.postTermToDelete);
    app.post("/edit", controllers.terms.postTermToEdit);

    // anyone else
    app.get("*", function (req, res) {
        res.redirect("/warning");
    });
};