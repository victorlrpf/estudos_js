/*
Função Construtota

Tanto a função construtora quanto a função fabica vão ratornar objetos

Factory Function, fazemos dessa forma -> criaPessoa
Constructor Functions, fazemos dessa forma -> Pessoa (new)
*/

function Pessoa(nome, sobrenome) {
    // Esses dois são considerados privados, pois eles não estão disponiveis fora do corpo do objeto
    const ID = 123456; // É um privado, que não está disponivel fora daqui
    const metodoInterno = () => {
        console.log('Eu sou o método interno');
    }

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('Victor', 'Ferreira');
p1.metodo();
