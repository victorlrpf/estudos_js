import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const quantidadeCaracteres = document.querySelector('.quantidade-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-maiusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolous = document.querySelector('.chk-especiais')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenha(
        quantidadeCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolous.checked
    )

    return senha || 'Nada selecionado'
}