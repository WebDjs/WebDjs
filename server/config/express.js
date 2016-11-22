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

    // View Engine
    app.set("view engine", "pug");
    app.set("views", config.rootPath + "/server/views");
    
    // BodyParser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    
    // Session init
    app.use(session(sessionParams));

    // Passport init
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cors());

    // Set Static Folder
    app.use(express.static(config.rootPath + "/public"));
};