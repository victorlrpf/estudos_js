/*
Esses sera para tratamento e lançando erros
try - ele tenta executa esse bloco
catch - se der algum erro, vai pra essa parte do código
*/

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e y devem ser números'); //lançar um erro
    }
    return x + y;
}

try {
    console.log(soma(5, 3));
} catch(error) {
    console.log('Ocorreu um erro, verrifique se ambos os numeros são realmente numeros e tente novamente')
}