const Proyectos = require('../models/Proyectos')
const slug = require('slug')


exports.projectsHome = (req, res) => {
    res.render('index',{
        nombrePagina : 'Proyectos'
    })
}

exports.formularioProyecto=(req, res) => {
    res.render('nuevoProyecto',{
        nombrePagina : 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto= async (req, res) => {
    // console.log(req.body)
    const { nombre } = req.body;

    let errores = [];

   if(!nombre){
       errores.push({'texto': 'Agregar un Nombre al Proyecto'})
   } 

   if(errores.length > 0){
       res.render('nuevoProyecto',{
           nombrePagina : 'Nuevo Proyecto',
           errores
       })
       
   }else{
       const url = slug(nombre).toLowerCase();
       const proyecto = await Proyectos.create({ nombre , url });
       res.redirect('/')
   }
}