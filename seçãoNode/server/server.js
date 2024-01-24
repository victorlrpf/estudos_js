const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`)
})

app.get('/contato', (req, res) => {
    res.send('Contato')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log("Servidor rodando na porta 3000")
})