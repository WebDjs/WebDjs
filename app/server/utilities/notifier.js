"use strict";

const notifier = require("node-notifier"); // Show a native notification on Mac, Windows, Linux
const timeWait = 5000;

module.exports = (function () {

    function success(msg) {
        notifier.notify({
            title: "Success",
            message: msg,
            sound: false, // true | false.
            time: timeWait, // How long to show balloon in ms
            wait: false, // Wait for User Action against Notification
        }, function (error, response) {
            console.log(response);
        });

    }

    function error(msg) {
        notifier.notify({
            title: "Error",
            message: msg,
            sound: false,
            time: timeWait,
            wait: false,
        }, function (error, response) {
            console.log(response);
        });
    }

    return {
        success,
        error
    };
})();
