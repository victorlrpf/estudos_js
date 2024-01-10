// date é uma funçao construtora
/*
const date = new Date('2023-10-10 20:20:59');

console.log('Dia', date.getDate())
console.log('Mês', date.getMonth()) // Mês começa em Janeiro = 0
console.log('Ano', date.getFullYear())
console.log('Min', date.getMinutes())
console.log('Seg', date.getSeconds())
console.log('ms', date.getMilliseconds())
console.log('Dia da semana', date.getDay()) // Começa no domingo = 0 e segunda = 6
console.log(date.toString())
*/

function zeroEsquerda(num) {
    return num >= 10 ? num :`0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);