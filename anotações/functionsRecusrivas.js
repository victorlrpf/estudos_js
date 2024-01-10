// As funções recursivas são funções que chamam elas mesmas
// O node tem um limite, se fizer muitas recusividades, ele acaba travando
// Ela executa o proprio codigo e se chama devolta
// Só precisamos ficar atentos ao loop
function recursivas(max) {
    if(max >= 10) return;
    max++;
    console.log(max);
    recursivas(max)
}

recursivas(0)