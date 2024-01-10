function Calculadora() {
    this.display = document.querySelector('.display');
    
    
    this.inicia = () => {
        this.cliqueBotoes();
        this.presionaEnter();
    };

    this.presionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = () => {
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
    };

    this.limparDisplay = () => {
        this.display.value = ""
    };

    this.apagaUmCaracter = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.cliqueBotoes = () => {
        document.body.addEventListener('click', e => {
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
        })
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }
}

const calculadora = new Calculadora();
calculadora.inicia();