var path = require("path");
var rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development: {
        rootPath: rootPath,
        db: "mongodb://localhost:27017/webdjsdb",
        port: process.env.PORT || 3333
    },
    production: {
        rootPath: rootPath,
        db: "",
        port: process.env.PORT || 3333
    }
};