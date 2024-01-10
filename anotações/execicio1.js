const maiorMenor = recebeNum(5 , 2);

function recebeNum(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    };
    // return numero1 > numero2 ? numero1 : numero2;
}

console.log(maiorMenor);