const res = require('express/lib/response');
const Proyectos = require('../models/Proyectos')



exports.proyectosHome = async (req, res) => {

    const proyectos = await Proyectos.findAll();
    
    res.render('index',{
        nombrePagina:'Proyectos',
        proyectos
    });
   
};

exports.formularioProyecto= async (req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('nuevoProyecto',{
        nombrePagina : 'Nuevo Proyecto',
        proyectos
    });
};

exports.nuevoProyecto= async (req, res) => {
    const proyectos = await Proyectos.findAll();
    const { nombre } = req.body;

    let errores = [];

   if(!nombre){
       errores.push({'texto': 'Agregar un Nombre al Proyecto'})
   } 

   if(errores.length > 0){
       res.render('nuevoProyecto',{
           nombrePagina : 'Nuevo Proyecto',
           errores,
           proyectos
       })
       
   }else{
       
       const proyecto = await Proyectos.create({ nombre });
       res.redirect('/')
   }
};

exports.proyectoPorUrl = async(req, res, next) => {

    const proyectosPromise =  Proyectos.findAll();

    const proyectoPromise =  Proyectos.findOne({
        where:{
            url : req.params.url
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise,proyectoPromise])
    
    if(!proyecto) return next();

    // console.log(proyecto)

    res.render('tareas',{
        nombrePagina:'Tareas del Proyecto',
        proyecto,
        proyectos
    })
};

exports.formularioEditar = async(req, res,) => {
    const proyectosPromise =  Proyectos.findAll();

    const proyectoPromise =  Proyectos.findOne({
        where:{
            id : req.params.id
        }
    });

    const [proyectos, proyecto] = await Promise.all([proyectosPromise,proyectoPromise])

    res.render('nuevoProyecto', {
        nombrePagina : 'Editar Proyecto',
        proyectos,
        proyecto

    })
}