function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio');
/* Antes eu precisava selecionar os botões, mas agora já estamos fazendo isso no addeventlist
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
*/
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos)
    }, 1000);
}

document.addEventListener('click', function(e){
    const elementos = e.target; // Para pegar os elementos clicados na pagina

    if(elementos.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio();
    }

    if(elementos.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
    }

    if(elementos.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0
    }
})

/* Desse jeito acaba sendo mais custoso no processamento
iniciar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio();
})

pausar.addEventListener('click', function (e) {
    relogio.classList.add('pausado')
    clearInterval(timer);
})

zerar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0
})
*/