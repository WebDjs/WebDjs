"use strict";

const router = new Navigo(null, false);

router
    .on(() => {
        router.navigate("#/main");
    })
    .on("#/main")
    .on("#/register")
    .on("#/login")
    .on("#/profile")
    .on("#/logout")
    .on("#/test")
    .on("#/tasks")
    .on("#/dict")
    .resolve();