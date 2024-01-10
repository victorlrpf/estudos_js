// Primeiro vamos aprender o splice
/*
nome.splice(indeice, delete, elem1, elem2)
*/
// Negativo      -5        -4      -3        -2       -1
// Posito         0         1       2         3        4
const nomes = ['Victor', 'João', 'Eduardo', 'Gabriel', 'Júlia']
// Assim eu vou fazer o rest de nomes e sempre que alterar uma coisa não altero no original
const nomes2 = [...nomes]
const nomes3 = [...nomes]
const nomes4 = [...nomes]

const removidos = nomes2.splice(2, 1)
const adicionando = nomes3.splice(2, 0, 'Mucio')
const trocando = nomes4.splice(2, 1, 'Jorge')
/*
console.log(nomes)
console.log(nomes2, removidos)
console.log(nomes3, adicionando)
console.log(nomes4, trocando)
*/
// .concat é uma maneira para concatenar ou usar o ... que o spread que espaçlha o array
const nomes5 = [...nomes, ...nomes2]


// Filter vai sempre retornar um array com a mesma quantidade ou menos do array original, nunca masi elemetos
// O filter vai sempre retornar um novo arrau
const numeros6 = [0, 5, 50, 1, 8, 10, 92, 35, 36, 42, 72, 41, 58]

// Fiz uma arrow function dentro do filter para gerar o meu  resutado
/*
const numerosFiltrados = numeros6.filter(callbackFilter = (valor, indice) => {
    console.log(valor, indice)
    return valor > 10 // Aqui ele vai retornar true ou false
})*/
// console.log(numerosFiltrados)

const pessoas = [
    {nome: 'Luiz', idade: 55},
    {nome: 'Maria', idade: 2},
    {nome: 'João', idade: 25},
    {nome: 'Rosana', idade: 43},
    {nome: 'Wallace', idade: 50},
];

const pessoasComNomegrande = pessoas.filter((objeto) => {
    return objeto.nome.length >= 5
})


const pessoasComMaiorIdade = pessoas.filter((objeto) => {
    return objeto.idade >= 50
})

const pessoasComA = pessoas.filter((objeto) => {
    return objeto.nome.toLowerCase().endsWith('a')
})

// console.log(pessoasComA)

// Map, diferentedo filter ela vai alterar os valores do meu array
// Mas ele vai usar os mesmo esquemas anteriores
const numeros = [0, 5, 50, 1, 8, 10, 92, 35, 36, 42, 72, 41, 58]
const numerosDobro = numeros.map((valor, indice, array) => {
    return valor * 2
})

// console.log(numerosDobro)

const pessoas1 = [
    {nome: 'Luiz', idade: 55},
    {nome: 'Maria', idade: 2},
    {nome: 'João', idade: 25},
    {nome: 'Rosana', idade: 43},
    {nome: 'Wallace', idade: 50},
];

// Aqui a gente cria um novo array e ele gera um array com os nomes 
const nomeString = pessoas1.map((objeto) => {
    return objeto.nome;
})
//console.log(nomeString)
//Aqui queremos só mostrar só a idade, aqui eu posso deletar o nome ou fazer desse jeto
const idades = pessoas1.map((objeto) => {
    return { idade: objeto.idade}
})
//console.log(idades)

// Se a functions estiver com chaves e tiver que transformar em arrow, basta colocar paranteses 
// const idades = pessoas1.map((objeto) => ({idade: objeto.idade}));

// Adicionando a chave de id para cada
const comIds = pessoas1.map((objeto, indice) => {
    //objeto.id = indice + 1 // Aqui eu estou mexendo no objeto original
    const newObj = {...objeto}
    newObj.id = indice + 1
    return objeto
})

console.log(comIds)