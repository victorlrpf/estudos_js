const express = require('express')
const app = express()

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Idade: <input type="number" name="idade"><br>
    <button>Enviar</button>
    </form>`)
})

app.get('/contato', (req, res) => {
    res.send('Contato')
})

app.get('/teste/:idUsuarios?', (req, res) => { // dessa forma com o ? colocamos o parametros como opcional
    console.log(req.params) // Com params, falamos das partes que vem na rota da requisição
    console.log(req.query) // Aqui vemos o que foi adicionado na query string,  | Aqui é o que vem na queryStrings depois do ponto de enterrogação
    res.send(req.params.idUsuarios)
})

app.post('/', (req, res) => { // o post é pelo body
    console.log(req.body)
    res.send(`
    <h2>Recebi o formulario</h2>
    <p>O que me enviou foi: ${req.body.nome}</p>
    `)
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log("Servidor rodando na porta 3000")
})