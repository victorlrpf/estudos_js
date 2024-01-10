/*
Continue - Ela basicamente pula para a proxima interação do laço,
Break - Ele chega onde é pedido e sai de execução, ele nem chega a mostrar, pois assim que encontra ele já sai
DIFERENÇÃS - O continue ele continua a nteração do laço, já o break não, ele encontra e já encerra
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (let numero of numeros) {
    // Continue 
    if(numero == 4){
        console.log("Encontrei e pulei o 4");
        continue;
    }

    // Break
    if(numero == 6){
        console.log('Número 6 encontrado, saindo...')
        break
    }
    console.log(numero)
}


