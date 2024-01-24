// const mod1 = require('./mod1')
// console.log(mod1.falaNome())

const { nome, sobrenome, falaNome } = require('./mod1')

console.log(nome + sobrenome)
console.log(falaNome())

console.log(' ')

const { Pessoa } = require('./mod1')
const p1 = new Pessoa('Victor','Ferreira', 21)
console.log(p1)