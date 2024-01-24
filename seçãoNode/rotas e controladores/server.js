const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(routes)


app.get('/teste/:idUsuarios?', (req, res) => { // dessa forma com o ? colocamos o parametros como opcional
    console.log(req.params) // Com params, falamos das partes que vem na rota da requisição
    console.log(req.query) // Aqui vemos o que foi adicionado na query string,  | Aqui é o que vem na queryStrings depois do ponto de enterrogação
    res.send(req.params.idUsuarios)
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log("Servidor rodando na porta 3000")
})