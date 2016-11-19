"use strict";

function sendAjax(method, url, options) {
    options = options || {};

    let headers = options.headers || {},
        data = options.data || undefined,
        contentType = options.contentType ||  "text/html";

    let promise = new Promise((resolve, reject) => {
        $.ajax(url, {
            method,
            contentType: contentType,
            data: data,
            headers,
            success: function (response) {
                resolve(response);
            },
            error: function (err) {
                reject(err);
            }
        });
    });

    return promise;
}

let ajaxRequester = {

    get: (url, options) => {
        return sendAjax("GET", url, options);
    },

    post: (url, options) => {
        return sendAjax("POST", url, options);
    },

    put: (url, options) => {
        return sendAjax("PUT", url, options);
    },

    del: (url, options) => {
        return sendAjax("POST", url, options);
    }
}