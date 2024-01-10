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
    return new Promise((resolve, reject) => {
        // Vamos coloca o reject se o valor que estiver não for uma str
        if (typeof msg !== 'string') reject('Valor rejeitado')
        // if (typeof msg !== 'string')  reject(new Error("ERRO"))
        setTimeout(() => {
            // Aqui que ia chamar o callback a gente vai colocar para resolver a promessa
            resolve(msg)
        }, tempo)
    })
}


async function executa() {
    try {
        const fase1 = await espera('Frase 1', aleatorio(1, 3))
        console.log(`Fase 1: ${fase1}`)

        const fase2 = await espera('Frase 2', aleatorio(1, 3))
        console.log(`Fase 2: ${fase2}`)

        const fase3 = await espera('Frase 3', aleatorio(1, 3))
        console.log(`Fase 3: ${fase3}`)

        console.log('Terminamos na fase: ', fase3)
    } catch (e) {
        console.log(e)
    }
}
executa()