exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Idade: <input type="number" name="idade"><br>
    <button>Enviar</button>
    </form>`
    )
}

exports.TrataPost = (req, res) => {
    console.log(req.body)
    res.send(`
    <h2>Recebi o formulario</h2>
    <p>O que me enviou foi: ${req.body.nome}</p>
    `)
}