/*
For Clássico - Geralmente com iterávis (array ou strings)
For in - Retorna o indice ou chave (string, array ou objeto)
For of - Retorna o valor em si (Iteraiveis, arrays ou strings)
*/


// Esse é um contador que a gente faz a  Esse serio o for classico
const frutas = ['Pera', 'Maçã', 'Uva', 'Banana', 'Acerola'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//  Aqui ja uso o for in
// Ele lê os indices do array ou chaves do Objetos
const generos = ['Ação', 'Ficção', 'Drama', 'Comedia', 'Biografia'];
for (let i in generos) {
    console.log(`Esté é o indice ${i}: ${generos[i]}`);
}

// Com Objetos

const pessoa = {
    nome: 'Victor',
    sobrenome: 'Ferreira',
    idade: 21,
}

for (let i in pessoa) {
    console.log(`O objeto PESSOA, e suas chaves são ${i} ${pessoa[i]}`)
}