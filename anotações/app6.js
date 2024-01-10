const pontuacaoUsuario = 900;
const nivelUser = pontuacaoUsuario >= 1000 ? 'Vip' : 'Normal';

const corUser = '';
const corPadrao = corUser || 'Pink';

console.log(nivelUser, corPadrao)