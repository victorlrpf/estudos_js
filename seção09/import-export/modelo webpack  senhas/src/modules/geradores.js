const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
// Letras
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(91, 123))
// Numeros
const geraNumeros = () => String.fromCharCode(rand(48, 58))
// caracteres Especiais
const caracteres = ",.+-*/''=§]}º{[ª^~?/°;:><|!@#$%¨&()_£¢¬"
const geraCaracteres = () => caracteres[rand(0, caracteres.length)]

export default function geraSenha(quantidade, maiusculas, minusculas, numeros, caracteres) {
    const senha = []
    quantidade = Number(quantidade)

    for(let i = 0; i < quantidade; i++) {
        maiusculas && senha.push(geraMaiuscula())
        minusculas && senha.push(geraMinuscula())
        numeros && senha.push(geraNumeros())
        caracteres && senha.push(geraCaracteres())
    }
    return senha.join('').slice(0, quantidade)
}