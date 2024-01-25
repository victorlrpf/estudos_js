const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, res) => {
    // req.session.usuario = {
    //     nome: 'Victor',
    //     idade: 25,
    //     logado: true
    // }
    // s
    res.render('index.pug')
}

exports.TrataPost = (req, res) => {
    console.log(req.body)
    res.send(req.body)
    return
}

