"use strict";

const express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    session = require("express-session"),
    passport = require("passport");

const constantz = require("../common/constants");

const sessionParams = {
    secret: constantz.secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
};

module.exports = function (app, config) {

    // View Engine
    app.set("view engine", "pug");
    app.set("views", config.rootPath + "/server/views");

    // BodyParser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session(sessionParams));

    // Passport init
    app.use(passport.initialize());
    app.use(passport.session());

    // Set Static Resources
    app.use(express.static(config.rootPath + "/public"));
};