"use strict";

let express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    passport = require("passport");

module.exports = function(app, config) {
    app.set("view engine", "pug");
    app.set("views", config.rootPath + "/views");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(cors());
    app.use(express.static(config.rootPath + "/public"));
};