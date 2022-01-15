const express = require('express');
const router = express.Router();

module.exports = function(){

    router.get('/', (req, res) =>{
        res.send("index Page");
    });

    router.get('/nosotros', (req, res) =>{
        res.send("Sobre Nosotros Page");
    });

    return router; 
}