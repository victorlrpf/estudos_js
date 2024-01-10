/*
Esses sera para tratamento e lançando erros
try - ele tenta executa esse bloco
catch - se der algum erro, vai pra essa parte do código
finnaly - é sempre executado, dando erro ou não
*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperanda a intanceia de Date')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

    })
}


try {
    const data = new Date('01-01-20220 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    console.error(`Erro ${e.name}: ${e.message}`);
} finally {
    console.log('tenha um bom dia')
}