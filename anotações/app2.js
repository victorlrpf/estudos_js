let num1 = prompt("Digite um numero");
let num2 = prompt("Digite um numero");
let operacao = prompt("Qual operação vai fazer? (soma, subtração, divisão, multiplicação)");
num1 = parseInt(num1)
num2 = parseInt(num2)
/*
const resultado = num1 + num2;
console.log('resultado é ' + resultado)*/


let resultado;

function calcular() {
    if(operacao === 'soma') {
        resultado = num1 + num2;
    } else if(operacao === 'subtração') {
        resultado = num1 - num2;
    } else if(operacao === 'divisão') {
        resultado = num1 / num2;
    } else if(operacao === 'multiplicação') {
        resultado = num1 * num2;
    } else{
        alert('Digite um valor valido')
    }
}

console.log('O resultado da soma é ' + resultado)