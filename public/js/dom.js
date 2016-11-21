"use strict";

$(".logged").on("click", function () {
    let username = $("#tb-username-log").val();
    $("#btn-profile").html(username);

    $("#login").addClass("invisible");
    $("#register").addClass("invisible");

    $("#logout").removeClass("invisible");
    $("#profile").removeClass("invisible");
    $("#main-menu").removeClass("invisible");
});