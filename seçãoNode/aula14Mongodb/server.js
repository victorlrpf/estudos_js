require('dotenv').config()

const express = require('express')
const app = express()

// Conectando com o cluter
const mongoose = require('mongoose')
mongoose.connect(process.env.connectionString)
    .then(() => {
        app.emit('Pronto')
    })
    .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')
const { middlewareGlobal, middlewareSec } = require('./src/middlewares/middlewares')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
// app.set('view engine', 'pug')

app.use(middlewareGlobal)
app.use(middlewareSec)
app.use(routes)

// Quando estiver pronto a função vai fazer para começar a escutar
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log("Servidor rodando na porta 3000")
    })
})