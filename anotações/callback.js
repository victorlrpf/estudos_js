/*
Funções de Callback, que são funções que são executadas quando uma ação finaçiza ela ocorre
*/

function rand(min = 1000, mmax = 3000) {
    const num = Math.random() * (mmax - min + 1) + min;
    return Math.floor(num)
}

// Para fazer com que cada uma seja executada na ordem, vamos usar um parametro de callback

function f1(callback) {
    setTimeout(function () {
        console.log('f1')
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2')
        if (callback) callback();
    }, rand())
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3')
        if (callback) callback();
    }, rand())
}

/*
Aqui vamos fazer com qeu cada uma das funções receba o calback, deixando para serem 
executadas assim qeu a outra terminar
Aqui nos criamos a ordem de execução
*/

// Se fizer desse jeito vai ficar como uma boneca russa, onde eu mesmo me confundi um pouco quando estava fazendo
/*
f1(function () {
    f2(function () {
        f3(function () {
            console.log('Olá Mundo')
        })
    })
})
*/
// Para melhorar a escrita pode ser feita da seginte maneira, que dixa mais limpo e não fica como uma bola de neve

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log("Olá mundo!!")
}