// fetch('pessoas.json')
//     .then(respota => respota.json()) 
//     .then(json => carregaElementos(json))
// Vamos usar o AXIOS agora

axios('pessoas.json')
    .then(respota => carregaElementos(respota.data)) 

function carregaElementos(json) {
    let table = document.createElement('table')
    for(let pessoa of json) {
        const tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1)
        
        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)
        
        // let td3 = document.createElement('td')
        // td3.innerHTML = pessoa.salario
        // tr.appendChild(td3)
        
        let td4 = document.createElement('td')
        td4.innerHTML = pessoa.estado
        tr.appendChild(td4)

        let td5 = document.createElement('td')
        td5.innerHTML = pessoa.email
        tr.appendChild(td5)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}