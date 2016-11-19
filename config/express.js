"use strict";

let express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    session = require("express-session"),
    cors = require("cors"),
    passport = require("passport");

const sessionParams = {
    secret: "magic unicorns",
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
};

module.exports = function (app, config) {
    app.set("view engine", "pug");
    app.set("views", config.rootPath + "/views");
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session(sessionParams));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cors());
    app.use(express.static(config.rootPath + "/public"));
};