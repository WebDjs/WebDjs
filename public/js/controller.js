"use strict";

$("#btn-login").on("click", function () {
    let username = $("#tb-username-log").val();
    if (validator.isValidUsername(username)) {
        let password = $("#tb-password-log").val();
        if (validator.isValidPassword(password)) {
            notifier.success("LogIn success!");

            $("#btn-profile").html(username);

            $("#login").addClass("invisible");
            $("#register").addClass("invisible");

            $("#logout").removeClass("invisible");
            $("#profile").removeClass("invisible");
            $("#main-menu").removeClass("invisible");

            $("#tb-username-log").val("");
            $("#tb-password-log").val("");
            
            ajaxRequester.get("/main-logged");
        }
    }
});