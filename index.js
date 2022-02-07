const express = require("express");
const routers = require("./routes/indexRoutes");
const path = require("path");
const bodyParser = require("body-parser");


//helpers con f
const helpers = require("./helpers");


//DataBase conection 
const db = require('./config/db')

//Iport the model 

require('./models/Proyectos');

db.sync()
    .then(()=> console.log('Conectado con el servidor'))
    .catch( e => console.log(e))


const app = express();

//public static files
app.use(express.static('public'))

//Template Engine
app.set('view engine', 'pug');

// views
app.set('views',path.join(__dirname,'./views'));

//pasar var dump a la app 
app.use((req, res, next) =>{
    res.locals.year = 2022;
    res.locals.vardump = helpers.vardump;
    next();
})


//bodyParser //post
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routers())


app.listen(3001)