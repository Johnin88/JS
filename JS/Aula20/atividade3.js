// com base em um array de palavras, crie um novo array com objetos que terão as seguintes propriedades: palavra e quantidade de letras

let palavras = [ 'gato', 'passaro', 'capivara', 'serpente', 'papagaio']

// [
//     {palavra: 'gato',
//     quantidadeLetras: 4}
//
// ]

console.log('palavras'.length)

let objetosPalavras = palavras.map((elementoArray) => {
    let obj = {
        palavra : elementoArray,
        quantidadeLetras : elementoArray.length
    }
    return obj
})
console.log ("Novo Array")
console.log (objetosPalavras)
console.log('Array de referencia')
console.log(palavras)