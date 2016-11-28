let path = require("path");
let fs =  require("fs");

module.exports = {
    rootPath: path.normalize(__dirname + "/../../"),
    currentUsername: fs.readFileSync("./server/common/username.txt"),
    types: [
        {
            test: "test"
        },
        {
            problem: "problem"
        },
        {
            dict: "dict"
        }
    ],
    categories: [
        {
            html: "html"
        },
        {
            css: "css"
        },
        {
            bootstarp: "bootstarp"
        },
        {
            less: "less"
        },
        {
            sass: "sass"
        },
        {
            stylus: "stylus"
        },
        {
            javascript: "javascript"
        },
        {
            jquery: "jquery"
        },
        {
            typeScript: "typeScript"
        },
        {
            angular: "angular"
        },
        {
            react: "react"
        },
        {
            nodejs: "nodejs"
        },
        {
            express: "express"
        },
        {
            mongodb: "mongodb"
        },
        {
            mongoose: "mongoose"
        }
    ],
    logos: [
        {
            name: "html-image",
            path: "images/logos/html.png",
            num: "0"
        },
        {
            name: "css-image",
            path: "images/logos/css.png",
            num: "1"
        },
        {
            name: "bootstrap-image",
            path: "images/logos/bootstrap.png",
            num: "2"
        },
        {
            name: "less-image",
            path: "images/logos/less.png",
            num: "3"
        },
        {
            name: "sass-image",
            path: "images/logos/sass.png",
            num: "4"
        },
        {
            name: "stylus-image",
            path: "images/logos/stylus.png",
            num: "5"
        },
        {
            name: "js-image",
            path: "images/logos/js.png",
            num: "6"
        },
        {
            name: "jquery-image",
            path: "images/logos/jquery.png",
            num: "7"
        },
        {
            name: "ts-image",
            path: "images/logos/ts.png",
            num: "8"
        },
        {
            name: "angular-image",
            path: "images/logos/angular.png",
            num: "9"
        },
        {
            name: "react-image",
            path: "images/logos/react.png",
            num: "10"
        },
        {
            name: "nodejs-image",
            path: "images/logos/nodejs.png",
            num: "11"
        },
        {
            name: "express-image",
            path: "images/logos/express.png",
            num: "12"
        },
        {
            name: "mongodb-image",
            path: "images/logos/mongodb.png",
            num: "13"
        },
        {
            name: "mongoose-image",
            path: "images/logos/mongoose.png",
            num: "14"
        }
    ]
};