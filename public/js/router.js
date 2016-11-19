"use strict";

const router = new Navigo(null, false);

router
    .on("/main")
    .on("/register")
    .on("/login")
    .on("/profile")
    .on("/logout")
    .on("/test")
    .on("/tasks")
    .on("/dict")
    .on("/term")
    .resolve();
