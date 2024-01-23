exports.paginaInicial = (req, res) => {
    res.render('index.ejs')
}

exports.TrataPost = (req, res) => {
    console.log(req.body)
    res.send(req.body)
    return
}