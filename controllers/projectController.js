exports.projectsHome = (req, res) => {
    res.render('index',{
        nombrePagina : 'Proyectos'
    })
}

exports.test = (req, res) => {
    res.render('test')
}