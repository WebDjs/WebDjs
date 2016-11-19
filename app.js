"use strict";

let express = require("express");

let env = process.env.NODE_ENV || "development";

let app = express();

let config = require("./config/config.js")[env];

require("./config/express")(app, config);
require("./config/mongoose")(config);
require("./config/passport")();
require("./config/routes")(app);

let port = config.port,
    openurl = require("openurl");

app.listen(port);
openurl.open(`http://localhost:${port}`);
console.log("Server running on port: " + port);