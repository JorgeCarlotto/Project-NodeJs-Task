const express = require('express');
const router = express.Router();

//Controllers
const projectController = require('../controllers/projectController')


//Routers
module.exports = function(){
    router.get('/', projectController.projectsHome);
    router.get('/test', projectController.test);

    return router; 
}