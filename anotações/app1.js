const nome =  'Victor Luis';
const idade = 21;
const peso = 90;
const altura = 1.83;
let imc;
let anoNascimento;

imc = Math.floor(peso / (altura * altura));
anoNascimento = 2023 - idade;

console.log(`Olá, ${nome}! você tem ${idade}, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc} e nasceu no ano de ${anoNascimento}`);