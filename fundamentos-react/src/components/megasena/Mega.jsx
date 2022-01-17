
function gerarNumeros(qtde) {

    return [3, 13, 43, 51, 53, 55, 59]

}

console.log(gerarNumeros(7))

function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return array.includes(aleatorio) ?
    gerarNumeroNaoContido(min, max, array) :
    aleatorio
}

console.log(gerarNumeroNaoContido(1, 5, [1, 2, 3, 4]))