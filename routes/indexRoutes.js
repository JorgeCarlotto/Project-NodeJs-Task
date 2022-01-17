const express = require('express');
const router = express.Router();

//Controllers
const projectController = require('../controllers/projectController')


//Routers
module.exports = function(){
    router.get('/', projectController.projectsHome);
    router.get('/nuevo-proyecto', projectController.formularioProyecto)
    router.post('/nuevo-proyecto', projectController.nuevoProyecto)

    return router; 
}