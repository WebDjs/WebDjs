"use strict";

let express = require("express"),
    bodyParser = require("body-parser"),
    passport = require("passport");

module.exports = function(app, config) {
    app.set("view engine", "pug");
    app.set("views", config.rootPath + "/views");
    app.use(bodyParser.json());
    //  app.use(bodyParser.urlencoded({extended: true}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + "/public"));
    // app.use(function(req, res, next) {
    //     if (req.session.error) {
    //         let msg = req.session.error;
    //         req.session.error = undefined;
    //         app.locals.errorMessage = msg;
    //     }
    //     else {
    //         app.locals.errorMessage = undefined;
    //     }

    //     next();
    // });
    // app.use(function(req, res, next) {
    //     if (req.user) {
    //         app.locals.currentUser = req.user;
    //     }
    //     else {
    //         app.locals.currentUser = undefined;
    //     }

    //     next();
    // });
};