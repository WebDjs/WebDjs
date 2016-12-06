"use strict";

let requester = {
    post: (url, data, func) => {
        return $.ajax({
            type: "POST",
            url: url,
            data: { data: data },
            success: func || window.location.reload(),
            dataType: "json"
        });
    }
}

//===========================================

$(".logoLink").on("click", function () {

    let altValue = $(this).children("img").attr("alt") || $(".logoImgHome").attr("alt");

    $("#obj-title").html(altValue.toUpperCase());

    requester.post("/dict-tag", altValue);
});

//===========================================

$(".current-term-title").on("click", function () {
    let currentItem = $(this);
    let currentTitle = currentItem.text();

    requester.post("/dict-current-title", currentTitle);
});

//===========================================

$("#add-form").on("click", (event) => {
    event.stopPropagation();
});

//===========================================

$(".search-space").on("keyup", function () {
    let input, filter, ul, li, a, i;

    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ulList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        if (isMatching(filter, a.innerHTML)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    let list = $("ul.nav.nav-pills.nav-stacked.items-list");
});

$(".search-space").on("change", function () {
    window.location.reload(true);
});

function isMatching(sample, listWord) {
    sample = sample.toUpperCase();
    listWord = listWord.toUpperCase();

    if (listWord.length < sample.length) {
        return false;
    }

    for (let j = 0; j < sample.length; j += 1) {
        if (listWord[j] !== sample[j]) {
            return false;
        }
    }

    return true;
}

//===========================================

$("#dict-delete.btn.btn-danger").on("click", function () {
    let currentItem = $("p.term-name").html();

    requester.post("/delete");
});

//===========================================

$("#dict-edit.btn.btn-success").on("click", function () {
    let currentItem = $("p.term-name").html();

    console.log(currentItem);


    //requester.post("/edit", currentItem );
});

//===========================================

$("button.buttons").on("click", function () {
    $(this).addClass("visited-question");
});