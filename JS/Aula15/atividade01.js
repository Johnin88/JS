// usando o loop for, crie um algoritmo que exiba todos os numeros 0 até o numero passado pelo usuario no console.

let numUsuario = Number(prompt('Digite um numero para finalizar a contagem'));
let qtdNumeros = 0;
let somaNumeros = 0;

// declaração e inicializacao do valor da contagem; condição; atualização ou incremento

for(let i = 0; i <= numUsuario; i++){
    console.log(i)
    qtdNumeros += 1 // ou qtdNumeros = qtdNumeros + 1
    somaNumeros += 1 //ou somaNumeros = somaNumeros + 1
}

console.log('Quantidade de numeros' + qtdNumeros)
console.log('Quantidade de numeros ${qtdNumeros}') // as aspas serão subistuidas poelo acento grafico
console.log('Soma dos numeros' + somaNumeros)
