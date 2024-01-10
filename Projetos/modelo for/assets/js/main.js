// Crie uma tag e adiciona os elementos
// Crie uma div para conter todos os elementos
// Os que estão comentados são maneiras diferentes de mostrar 

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const pricipal = document.querySelector('section');
const div = document.createElement('div');
pricipal.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criado = document.createElement(tag);
    //criado.innerHTML = texto;
    let textoCriado = document.createTextNode(`${texto}`);
    //div.appendChild(criado);
    div.appendChild(textoCriado);
}

pricipal.appendChild(div)