"use strict";

let express = require("express");

let env = process.env.NODE_ENV || "development";

let app = express();

let params = require("./server/config/params")[env];

require("./server/config/express")(app, params);
require("./server/config/mongoose")(params);
require("./server/config/passport")();
require("./server/config/router")(app);

let port = params.port,
    openurl = require("openurl");

app.listen(port);
console.log("Server running on port: " + port);
openurl.open(`http://localhost:${port}`);