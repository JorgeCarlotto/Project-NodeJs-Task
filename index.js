const express = require("express");
const routers = require("./routes/indexRoutes");
const path = require("path");

const app = express();

//Template Engine
app.set('view engine', 'pug');

// views
app.set('views',path.join(__dirname,'./views'));

app.use('/', routers())


app.listen(3000)