//criar um formulário com os campos: Altura e Peso
const form = document.querySelector('.form');

/* Essa é uma outra forma de escrever tambem
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const altura = evento.target.altura.value;
    const peso = evento.target.peso.value;

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso) {
        resultadoImc('Peso invalido', false);
        return;
    } 
    
    if(!altura) {
        resultadoImc('Altura invalida', false);
        return;
    }

    console.log('cheguei')
})
*/

function recebeValores(evento) {
    evento.preventDefault();
    const inputAltura = evento.target.querySelector('#altura');
    const inputPeso = evento.target.querySelector('#peso');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        resultadoImc('Peso invalido', false);
        return;
    }

    if (!altura) {
        resultadoImc('Altura invalida', false);
        return;
    }

    // Calcula o IMC
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC ${imc} (${nivelImc}).`;
    // Mensagem exibida na tela
    resultadoImc(mensagem, true);
}
form.addEventListener('submit', recebeValores)

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III']
    // Para um If muito pequeno pode ser feito de ambas as maneiras, mas é mais adequado que seja feito em um linha só
    if (imc >= 39.9) return nivel[5]; 

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

function criarParagrafo() {
    const p = document.createElement('p');
    return p;
}

function resultadoImc(mensagem, eValido) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criarParagrafo();

    if(eValido) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('paragrafo-invalido');
    }
    p.innerHTML = mensagem;
    resultado.appendChild(p)
}
