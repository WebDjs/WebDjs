/* globals require module Promise */
"use strict";

let Question = require("mongoose").model("Question");

function* idGenerator() {
    const forever = true;
    let id = 0;

    while (forever) {
        yield ++id;;
    }
}
 
module.exports = {
    
}
