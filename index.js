const express = require("express");
const routers = require("./routes/indexRoutes");
const path = require("path");
const bodyParser = require("body-parser");


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


//bodyParser //post
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routers())


app.listen(3001)