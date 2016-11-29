"use strict";

$(".logoLink").on("click", function () {

    let altValue = $(this).children("img").attr("alt");

    $("#obj-title").html(altValue.toUpperCase());

    $(this).css("background-color", "#f5def9");

    function tagRequest() {
        return $.ajax({
            type: "POST",
            url: "/dict-tag",
            data: {data: altValue},
            success: () => { console.log("Tag sent!"); },
            dataType: "json"
        });
    };

    tagRequest();
}); 