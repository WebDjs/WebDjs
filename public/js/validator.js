"use strict";

const constants = {
    username: {
        minLength: 3,
        maxLength: 30
    },
    password: {
        minLength: 6,
        maxLength: 30,
        allowedCharacters: "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    },
    material: {
        minLength: 6,
        maxLength: 100
    }
}

const checkForOtherSymbols = (stringg, chars) => {
    for (let i = 0; i < stringg.length; i += 1) {
        if (chars.indexOf(stringg.charAt(i)) < 0) {
            return false;
        }
    }

    return true;
};

const validator = {
    isValidUsername: (username) => {
        if (typeof username !== 'string') {
            notifier.error("Username must be a string!");
            return false;
        }

        if (username.length < constants.username.minLength || username.length > constants.username.maxLength) {
            notifier.error("Username must be between 3 and 30 characters!");
            return false;
        }

        return true;
    },
    isValidPassword: (pass) => {
        if (typeof pass !== "string") {
            notifier.error("Password must be a string!");
            return false;
        }

        if (pass.length < constants.password.minLength || pass.length > constants.password.maxLength) {
            notifier.error("Password must be between 6 and 30 characters!");
            return false;
        }

        if (!checkForOtherSymbols(pass, constants.password.allowedCharacters)) {
            notifier.error("Password can contain only Latin letters, digits and the characters _ and .");
            return false;
        }

        return true;
    }
};
