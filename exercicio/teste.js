/*
Crie um array de números.
Escreva uma função que receba o array como parâmetro e retorne 
a soma de todos os números pares contidos no array.
*/

const arrayNum = [1,2,3,4,5,6,7,8]

function numerosPare(arrayNum) {
    let soma = 0;
    for(let i = 0; i < arrayNum.length; i++) {
        if(arrayNum[i] % 2 == 0){
            soma += arrayNum[i];
        }
    }
    return soma
}

console.log(numerosPare(arrayNum))

