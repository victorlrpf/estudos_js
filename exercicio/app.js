/*
Objetos e Métodos:

Crie um objeto chamado carro com propriedades como modelo, ano, cor, etc.
Adicione um método ao objeto carro que exiba uma mensagem informando as características do carro.
*/



function Carro(modelo, ano, cor) {
    this.modelo = modelo
    this.ano = ano
    this.cor = cor
}

const carro1 = new Carro("Fusca",2015,"Preto")

console.log(carro1)