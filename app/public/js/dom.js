"use strict";

let requester = {
    post: (url, data) => {
        return $.ajax({
            type: "POST",
            url: url,
            data: { data: data },
            success: window.location.reload(),
            dataType: "json"
        });
    }
}

$(".logoLink").on("click", function () {

    let altValue = $(this).children("img").attr("alt");

    $("#obj-title").html(altValue.toUpperCase());

    $(this).css("background-color", "#f5def9");

    requester.post("/dict-tag", altValue);
});

$(".current-term-title").on("click", function () {

    let currentTitle = $(this).text();

    requester.post("/dict-current-title", currentTitle);
});

$("#add-form").on("click", (event) => {
    event.stopPropagation();
});