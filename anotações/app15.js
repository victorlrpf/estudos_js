function mostraHora() {
    let data =  new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

    })
}
// O Interval ele executa para sempre  nos espaços de tempo definidos 
const timer = setInterval(function (){
    console.log(mostraHora())
}, 1000)


//Ele executa uma vez dentro do espaço de tempo definido
setTimeout(function() {
    clearInterval(timer);
}, 5000)