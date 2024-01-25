exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Esse valor é local'
  next()
}

exports.middlewareSec = (req, res, next) => {
  next()
}

exports.checkCsrfError = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.send('Erro CSRF')
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};