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

//===========================================

$(".logoLink").on("click", function () {

    let altValue = $(this).children("img").attr("alt");

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
    $("body").removeClass("active");

    let $this = $(this);
    let sample = $this.val();
    let list = $("ul.nav.nav-pills.nav-stacked.items-list li a");

    for (let i = 0; i < list.length; i += 1) {
        let currentListValue = $(list[i]).html();

        if (sample !== "" && isMatching(sample, currentListValue)) {
            $(list[i]).addClass("active");
            $(list[i]).attr('selected','selected');
            break;
        }
    }
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
