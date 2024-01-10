// Funções geradora
// Com ela podemos rodar o codigo e na primeira vez que rodar ela retorna o primeiro valor e na segundo o segndo
// E assim continua, o yield ao contrario do return não encerra a função
function* geradora1() {
    // Codigo...
    yield 'valor 1'
    // Codigo...
    yield 'valor 2'
    // Codigo...
    yield 'valor 3'
}

const g1 = geradora1()
console.log(g1.next()) // utilizamos next para ver o que foi gerado
/*
No resultado fica da seguinte forma
{value: 'valor 1', done: false}
done é para falar que ainda tem mais para gerar
*/
// caso precisamos de um valor usamos o value, e dependendo de quanto tiver ele 
// vai retornar apenas esse ou todos os valores
console.log(g1.next().value)
console.log(g1.next().value)

// Esse é um gerador que delega tarefa para um outro gerador

function* geradora2() {
    yield 0
    yield 1
    yield 2
}
//Aqui vamos delegar para a geradora3  fazer o 0 1 2

function* geradora3() {
    yield* geradora2()
    yield 3
    yield 4
    yield 5
}

const g3 = geradora3() 
for(let valor of g3) {
    console.log(valor)
}

