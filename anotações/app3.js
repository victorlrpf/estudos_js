let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC);

// Inverta as colocando na sequencia B C A
/*
const varTempA = varA
varA = varB
varB = varC
varC =  varTempA
console.log(varA, varB, varC);
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);