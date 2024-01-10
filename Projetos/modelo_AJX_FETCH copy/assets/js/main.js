// Vamnos fazer requisição de dados

document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(elemento)
    }
})

async function carregaPagina(elemento) {
    try {
        const href = elemento.getAttribute('href')
        const response = await fetch(href)

        if (response.status !== 200) throw new Error('ERRO 404')

        const html = await response.text()
        carregaResultado(html)
    } catch (e) {
        console.warn(e)
    }

    /* Aqui eu apliquei o async e o awit, então já não preciso mais do  codigo a baixo
    fetch(href)
    .then(response => {
        if(response !== 200) throw new Error('ERRO ' + response.status)
        return response.text()
    })
    .then(html =>  carregaResultado(html) )
    .catch(e => console.warn(e))
    */
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}