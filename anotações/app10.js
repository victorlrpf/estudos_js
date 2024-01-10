// Esse é o for of, ele trabalha com coisa iteravies quanddo eu preciso somente do valor do array
// Com objetos o for of não funciona, pois não é iteravel
// const nome = 'Victor Ferreira';

const nome = ['victor', 'ferreira', 'luiz']
for (let valor of nome) {
    //console.log(valor)
}
    
// Esse é o foreach
nome.forEach(function (valor, indice, array) {
    console.log(`${indice}: ${valor}`);
})