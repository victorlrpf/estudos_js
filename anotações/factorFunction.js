// Funções Fabricas
// São fnções que retornanm um objeto por exemplo
// Com  this, podemos usar ele aqui para se referir ao que estamos executando, aqui por exemplo seria o fala

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, sobrenome, 
        // Como só obtenho um valor ele pode ser m Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift(); // Aqui a gente tirou o Victor e deixamos só o Luis
            this.sobrenome = valor.join(" "); // Juntamos os demais nomes juntos
            //console.log(valor)
        },

        fala: function(assunto){
            return `${nome} esttá ${assunto} e tem o imc de ${this.imc()}`;
        },

        altura, peso,

        imc() {
            const indice = peso / (altura **2);
            return indice.toFixed(2);
        }
    };
}

// O this está sempre atrelado a quem chamar o objeto, por exemplo aqui é o p1

const p1 = criaPessoa('Victor Luis','Ferreira', 1.8, 80);
p1.nomeCompleto = 'Victor Luis' // Aqui eu atribuo denovo as e chamo o que seria o valor do nome completo e não utilozo o que já criei
console.log(p1.nomeCompleto);
console.log(' ');
console.log(p1.nome);
console.log(' ');
console.log(p1.sobrenome);
