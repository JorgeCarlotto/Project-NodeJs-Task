const Proyectos = require('../models/Proyectos')


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
       const proyecto = await Proyectos.create({ nombre });
       res.redirect('/')
   }
}