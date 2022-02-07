const express = require("express");
const router = express.Router();

//express validator

const {
  body
} = require("express-validator/check");

//Controllers
const projectController = require("../controllers/projectController");

//Routers
module.exports = function () {
  router.get("/", projectController.proyectosHome);
  router.get("/nuevo-proyecto", projectController.formularioProyecto);
  router.post("/nuevo-proyecto",
    body("nombre").not().isEmpty().trim().escape(),
    projectController.nuevoProyecto
  );

  return router;
};