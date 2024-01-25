require('dotenv').config()

const express = require('express')
const app = express()

// Conectando com o cluster
const mongoose = require('mongoose')
mongoose.connect(process.env.connectionString)
    .then(() => {
        app.emit('Pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middlewares')

app.use(helmet())

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'OLA',
    store: MongoStore.create({ mongoUrl: process.env.connectionString }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.set('view engine', 'pug')

app.use(csrf())
//Meu proprio middleware
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)

// Quando estiver pronto a função vai fazer para começar a escutar
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log("Servidor rodando na porta 3000")
    })
})