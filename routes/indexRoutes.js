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
  router.post("/nuevo-proyecto/:id",
    body("nombre").not().isEmpty().trim().escape(),
    projectController.nuevoProyecto
  );

  //Listar proyecto

  router.get("/proyectos/:url",projectController.proyectoPorUrl);

  //Actualizar Proyecto
  router.get("/proyectos/editar/:id",projectController.formularioEditar)

  return router;
};