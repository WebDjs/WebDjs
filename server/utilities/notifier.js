"use strict";

const notifier = require("node-notifier");

module.exports = (function () {

    function success(msg) {
        notifier.notify({
            title: "Success",
            message: msg,
            sound: false, // true | false.
            time: 5000, // How long to show balloon in ms
            wait: false, // Wait for User Action against Notification
        }, function (error, response) {
            console.log(response);
        });

    }

    function error(msg) {
        notifier.notify({
            title: "Error",
            message: msg,
            sound: false, // true | false.
            time: 5000, // How long to show balloon in ms
            wait: false, // Wait for User Action against Notification
        }, function (error, response) {
            console.log(response);
        });
    }

    return {
        success,
        error
    };
})();
