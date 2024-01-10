/*
Obejtivo do exercicio fazer com que a cor de fundo do body
seja a mesma cor de fundo do paragrafo 
Bonus a cor do texto em branco
*/

const paragrafos = document.querySelector('.paragrafos');
const  ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (let p of ps) {
    console.log(p)
    p.style.color = '#fff'; //texto em branco
    p.style.background = backgroundColorBody;//cor da fundo igual a do body
}
