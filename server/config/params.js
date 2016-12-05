let path = require("path");
let rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development: {
        rootPath: rootPath,
        db: "mongodb://localhost:27017/appdb",
        port: process.env.PORT || 3333
    },
    production: {
        rootPath: rootPath,
        db: "mongodb://Admin:secretpassword@ds113958.mlab.com:13958/webdjs",
        port: process.env.PORT || 3333
    }
};