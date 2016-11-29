"use strict";

// $(".logoImg").on("click", function () {
//     $("#obj-title").html($(this).text().toUpperCase());
// }); 

$(".logoLink").on("click", function () {
    $("#obj-title").html($(this).children("img").attr("alt").toUpperCase());
}); 