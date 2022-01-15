const express = require('express');
const router = express.Router();

//Controllers
const projectController = require('../controllers/projectController')


//Routers
module.exports = function(){
    router.get('/', projectController.projectsHome);
    router.get('/nosotros',projectController.aboutUs);
    
    return router; 
}