// Promises são bem uteis quando pensamos em conexão com api

function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min)) + min
}

function espera(msg, tempo) {
    // Como eu seu que vai demorar par ter resultado ai eu coloco uma promise
    // resolve = o codigo deu certo, resolva o restnate
    // reject = deu erro então resolva aqui
    return new Promise((resolve, reject) =>{
        // Vamos coloca o reject se o valor que estiver não for uma str
        if (typeof msg !== 'string')  reject('Valor rejeitado')
        // if (typeof msg !== 'string')  reject(new Error("ERRO"))
        setTimeout(() => {
            // Aqui que ia chamar o callback a gente vai colocar para resolver a promessa
            resolve(msg)
        }, tempo)
    })
}


// Aqui vamos colocar o metodo then e ele vai ser executado quando resolvermos a promesi
// E quando for o reject o metodo catch vai ser executado
espera('Conexão com o BD', aleatorio(1, 3)).then( // e dentro do then podemos retonar outra promisse
    resposta => {
        console.log(resposta)
        return espera('Buscando base da BASE', aleatorio(1, 3))
    }).then(resposta => {
        console.log(resposta)
        return espera(5411813, aleatorio(1, 3))
        //return espera('Tratando os dados da BASE', aleatorio(1, 3))
    }).then(resposta => {
        console.log(resposta)
    }).then(()=> {
        console.log(`Exibe os dados`)
    }).catch(e => {
        console.log('ERRO: ', e)
    })


/*
O codigo é executado primeiro,
Sendo assim o codigo é executado primeiro e depois as promises
*/
console.log('Tentando começar a conexão com o BD')