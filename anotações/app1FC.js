// Funções avançadas
// O modo utilizado até o momento foi de declaração  por metodo hoisting, que permite declarar 
// antes de criar e faz com que não gere nemnhuum erro, todas as funções são tratadas como 
// objetos de primeira classe

falaOi();
function falaOi(){
    console.log("Olá!");
}

// Em Js a função pode ser tratada como um dado, dando para passar uma fução como parrametros de funcções
//Essa é um exemplo de Function express

const souUmDado = function() {
    console.log('Sou um dado');
}

function executa(funcao) {
    console.log('Executando sua função');
    funcao();
}
executa(souUmDado);

//
// Arrow functions, nele podemos tratar da mesma forma como qualquer outra (mais pra frente veremos this, qe aplica mais nessa)
const funcarArrow = () => {
    console.log('Sou uma função arrow');
};
funcarArrow();