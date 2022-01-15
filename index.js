const express = require("express");
const routers = require("./routes/indexRoutes");

const app = express();

app.use('/', routers())

app.listen(3000)