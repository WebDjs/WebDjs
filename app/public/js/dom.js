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

let altValue,
    currentTitle;

//===========================================

$(".logoLink").on("click", function () {

    altValue = $(this).children("img").attr("alt");

    $("#obj-title").html(altValue.toUpperCase());

    requester.post("/dict-tag", altValue);
});

$(".current-term-title").on("click", function () {

    currentTitle = $(this).text();

    requester.post("/dict-current-title", currentTitle);
});

//===========================================


$("#add-form").on("click", (event) => {
    event.stopPropagation();
});

$("#search-not-logged").on("change", () => {
    let sample = $(this).text();
});
