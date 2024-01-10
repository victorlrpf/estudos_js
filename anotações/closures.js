// Esse é uma parte para entender o closure, vamos fazer uma função que retorna uma função
// Essa função tem acesso a 3 escopos, sendo eles o o escopo global, escopo da mãe e ao dela mesma
/*
Closure é a habilidae que a função tem de acessar o seu escopo lexico
*/
function retornaFuncao() {
    const nome = 'victor';
    return function() {
        return nome
    }
}
// Ela fecha o escopo com o nome, se passasemos o nome como um paramentro
// Ou seja ela (closure) fecha com o parametro, se tivessemos duas const funcao
// Cada uma seria um closure diferente
const funcao = retornaFuncao(); 
console.log(funcao); 
/*
Dessa maineira ela mostra uma função anomina, que é a função que ela retorna
a função anomina, retorna a retornaFuncao
*/