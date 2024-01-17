const nome = 'Victor'
const sobrenome = 'Ferreira'

const falaNome = () => nome + ' ' + sobrenome

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}


exports.Pessoa = Pessoa
exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.teste = 'Ele nesse caso referencia o exports'