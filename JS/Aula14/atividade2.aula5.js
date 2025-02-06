// Escreva um algoritmo que exiba todos os numeros pares de 0 ao numero passado pelo uusario (utilize prompt)
//E ao final mostre no console quantos numeros pares foram exibidos.

let contador = 0;
let numeroDigitado = Number(prompt('Digite o numero'));

while (contador <- numeroDigitado) {
    if(contador % 2 === 0) {
        console.log('Numeros Pares ${contador}')
    }
    contador ++;
}