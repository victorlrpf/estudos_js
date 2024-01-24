exports.middlewareGlobal = (req, res, next) => {
  if(req.body.cliente) {
    console.log()
    console.log(`Olha o que voce postou ${req.body.cliente}`)
    console.log()
  }
  next()
}

exports.middlewareSec = (req, res, next) => {
  console.log("Segundo Middleware")
  next()
}

exports.checkCsrfError = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.send('Erro CSRF')
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}