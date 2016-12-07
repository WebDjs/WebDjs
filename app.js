"use strict";

const express = require("express");

let env = process.env.NODE_ENV || "development";

let app = express();

let params = require("./server/config/params")[env];

require("./server/config/express")(app, params);
require("./server/config/mongoose")(params);
require("./server/config/passport")();
require("./server/config/router")(app);

let port = params.port;

app.listen(port);
console.log("Server running on port: " + port);

if (env === "development") {
    let openurl = require("openurl");
    
    openurl.open(`http://localhost:${port}`);
}
