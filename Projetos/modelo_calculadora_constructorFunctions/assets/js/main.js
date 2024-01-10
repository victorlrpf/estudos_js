function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        // Sempre qeu eu queiser referenciar uma chave do meu objeto, dentro do objeto eu vou precisar usar a palavra this
        inicia() {
            this.cliqueBotoes();
            this.presionaEnter();
        },

        presionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta =  this.display.value;

            try{
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invalida')
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta invalida')
                return
            }
        },

        limparDisplay() {
            this.display.value = ""
        },

        apagaUmCaractere() {
            this.display.value = this.display.value.slice(0, -1) // Aqui a gente pega o tamanho da string menos um
        },


        // Atributos vão ficar para cima dessa linha  e metodos vão ficar para baixo dessa linha
        // Para ficar mais organizado
        cliqueBotoes() {
            // Aqui o this era a calculadora (this -> calculadora)
            // Depois que chamamos o document o this se tornou o document (this -> document)
            // Se eu fizesse com arrow function ela travaria o this em qeuam criou e não teria que fazer isso
            document.addEventListener('click', function(e){
                const elemento = e.target;

                if(elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')) {
                    this.limparDisplay();
                }

                if(elemento.classList.contains('btn-del')) {
                    this.apagaUmCaractere();
                }

                if(elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();