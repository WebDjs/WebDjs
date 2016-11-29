"use strict";

$(".logoLink").on("click", function () {
    $("#obj-title").html($(this).children("img").attr("alt").toUpperCase());
}); 