const h1 = document.querySelector('h1')

function criaData() {
}

function zeroEsquerda(num) {
    return num >= 10 ? num :`0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDay());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    
    dataAtual = `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
    console.log(`${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`)
    calendario(dataAtual);
}

function getDiaSemana(diaSemana) {
    let = diaSemanaTexto;
    switch(diaSemana) {
        case  0:
            diaSemanaTexto = 'Domingo';
            break;
        case  1:
            diaSemanaTexto = 'Segunda';
            break
        case  2:
            diaSemanaTexto = 'Terca';
            break
        case  3:
            diaSemanaTexto = 'Quarta';
            break
        case  4:
            diaSemanaTexto = 'Quinta';
            break
        case  5:
            diaSemanaTexto = 'Sexta';
            break
        case  6:
            diaSemanaTexto = 'Sabado'
            break
    }

}


function criaParagrafo() {
    const calendarioAtual = document.createElement('calendarioAtual');
    return calendarioAtual;
}

function calendario(dataAtual) {
    const resultadoData = document.querySelector('h1');
    resultadoData.innerHTML = '';
    
    const calendarioAtual = criaParagrafo();
    
    calendarioAtual.innerHTML = dataAtual;
    resultadoData.appendChild(calendarioAtual)
}


const data = new Date()
const dataFormatada = formataData(data)