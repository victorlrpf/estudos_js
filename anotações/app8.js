const data = new Date('2002-10-04 09:00:00');
const diaSemana = data.getDay();
const dia = data.getDate();
console.log(diaSemana)
console.log(dia)
let diaSemanaTexto;

switch(diaSemana) {
    case  0:
        diaSemanaTexto = 'Domingo';
        break;
    case  1:
        diaSemanaTexto = 'Segunda';
        break
    case  2:
        diaSemanaTexto = 'Terca';
        break
    case  3:
        diaSemanaTexto = 'Quarta';
        break
    case  4:
        diaSemanaTexto = 'Quinta';
        break
    case  5:
        diaSemanaTexto = 'Sexta';
        break
    case  6:
        diaSemanaTexto = 'Sabado'
        break
}
console.log(diaSemanaTexto)