"use strict";

let express = require("express"),
    openurl = require("openurl");

let env = process.env.NODE_ENV || "development";

let app = express();
let config = require("./config/config.js")[env];
let port = config.port;

require("./config/express")(app, config);
require("./config/mongoose")(config);
require("./config/passport")();
require("./config/routes")(app);

app.listen(port);
openurl.open(`http://localhost:${port}`);
console.log("Server running on port: " + port);