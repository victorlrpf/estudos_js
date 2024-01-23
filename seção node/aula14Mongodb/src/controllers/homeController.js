const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Um titulo de teste', 
//     subtitulo: 'Descrição de teste'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e))


exports.paginaInicial = (req, res) => {
    res.render('index.ejs')
}

exports.TrataPost = (req, res) => {
    console.log(req.body)
    res.send(req.body)
    return
}

