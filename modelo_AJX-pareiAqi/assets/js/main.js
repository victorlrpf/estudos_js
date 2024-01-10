// Vamnos fazer requisição de dados

const request = objeto => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(objeto.method, objeto.url, true)
        xhr.send() // poderia ser null tbm

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(elemento)
    }
})

function carregaPagina(elemento) {
    const href = elemento.getAttribute('href')
    const objetoConfig = {
        method: 'GET',
        url: href,
    }

    request(objetoConfig).then(response => {
        carregaPagina(response)
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}