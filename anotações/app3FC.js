// Funções avançadas (Retorno da Função)
// Quando utilizamos a plavra return, a function termina ali mesmo gerando um retorno para a gente
// Ela gera um retorno, como por exemplo;
// E existe uma diferença entre retorno da funcção e saber o que ela esta fazendo

function soma(a, b) { // Aqui ela retorna
    return a + b; // Quando eu colocar a soma, ela vai me retornar o valor e guardar
}

console.log(soma(2, 3))

// Aqui ela vai fazer o que a função sabe fazer, mas não nos retorna
function soma2(x, y) {
    console.log(x + y)
}

soma2(2, 3)

// Um exemplo de função qeu não retorna nada, mas é util é essa
// Ela pode simplesmente mudar a cor de fundo de algo ou deixar algo com um efeito
// Nela não retorna nada, mas o que ela faz é muito importante
/*
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
*/
// Nem sempre vamos precisar que uma função retorne necessariamente um valor
// mas pode somente criar algo ou mudar a cor de m background

// Aqui vamos fazer uma função que vai criar objetos
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('victor', 'ferreira')
console.table(p1) // console.table forma uma tabela com objt

// Vamos fazer com que uma função dentro de uma função
// nesse exemplo é possivel ver uma função dentro de outra que executa um trabalho e ecurta ela
// Essa seria uma função closer ou fechamento, que fecha o escopo de uma função mesmo depeois dela ter sido feita
// 
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));