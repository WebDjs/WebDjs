"use strict";

$("#btn-login").on("click", () => {
    return ajaxRequester.get("/dict");
});