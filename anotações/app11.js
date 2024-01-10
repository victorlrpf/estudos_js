/*
A diferença entre um e outro é que o Do while primeiro executa e depois checa a condição,
ja o while ele checa e depois executa, fazendo com que no do while tenhamos pelo menos uma execução
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 10;
let rand = 10;
// let rand = random(min, max);
/*
Ele checa a condição e só depois checa o codigo abaixo
- Se for falsa ele sai do laço
- Se não ele continua até deixar de ser
*/
while (rand !== 10) {
    // rand = random(min, max)
    console.log('esse é o while',rand)
}
console.log("########")
/*
Ele executa o codigo primeiro e depois checa a condição
- Ele executa pelo menos uma vez o codigo
*/
do{
    // rand = random(min, max)
    console.log('esse é o do while',rand)
} while(rand !== 10);
