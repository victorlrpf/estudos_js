// Funções avançadas
// Quando escrevemos uma função com a palavra function, o JS disponibiliza pra gente uma palavra "arguments"
// Ela é um array que contém todos os argumentos passados para essa função, como o exemplo abaixo
// Serria dessa forma que é feito.
/*
function funcao() {
    console.log(arguments[0]) // E posso pegar os indices tambem
}
// A variavel arguments sustenta tudo o que foi enviado para a funcao
funcao('olá', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
*/

// Em um outro exemplo podemos fazer a soma de todos os argumentos passados
/*
function funcao() {
    let total = 0;
    for(let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
*/

// Nesse caso, mostra que podemos definir um valor padrão em uma variavel
// caso não definirmos o valor que vai retornar é NaN
/*
function funcao(a, b = 2) { 
    // Desse jeito como coloquei no b é para mostrar que se b não receber nenhum valor
    // Será 2
    console.log(a + b)
}
// Caso a gente queira fazer com que o valor assuma o valor padrão podemos colocar undefinde ou mudar a logica
funcao(2)
*/
/*
// Aqui vai ser feito com Atribuição via desestruturação
// essa é a de objeto
function funcao({nome, sobrenome, idade}) { 
    console.log(nome, sobrenome, idade)
}
let obj = {nome:'victor', sobrenome:'ferreira',idade:21};
funcao(obj)
*/
/*
// essa é a de array
function funcao([valor1, valor2, valor3]) { 
    console.log(valor1, valor2, valor3)
}
funcao(['Victor', 'Ferreira', 21])
*/
// Um exemplo de um function real
// Nela utilizamos o rest operator ele sempre deve ser o ultimo parametro da função
// Nela é possivel colocar de qualquer forma, seja ela comum, express function ou arrow function
function conta(operador, acumulador, ...numeros) {
    // console.log(operador, acumulador, numeros)
    for(let numero of numeros){
        if (operador == '+') acumulador += numero
        if (operador == '-') acumulador -= numero
        if (operador == '*') acumulador *= numero
        if (operador == '/') acumulador /= numero
    }
}
conta('+', 0, 20, 23, 5, 50, 90, 4)