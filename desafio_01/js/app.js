function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    // Aqui o formulario não é enviado, fazendo com que a gente consiga pegar os dados e usar eles
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value)
        pessoas.push(pessoa)
        console.log(pessoas)
        
        /* 
        Outra forma de fazer o codigo seria 
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        */

        resultado.innerHTML += `<p>${nome.value} | ${sobrenome.value} | ${peso.value} | ${altura.value}</p>`

                
        function criaPessoa(nome, sobrenome, peso, altura) {
            return {
                nome, sobrenome, peso, altura
            };
        }

    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();