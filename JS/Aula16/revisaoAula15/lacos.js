/* Faça um programa que leia um numero inteiro positivo n e calcule a soma dos n primeiros numero naturais */

// Informe o numero 10 - soma do 0 até o 10

let n = Number(prompt("Digite um numero Inteiro Positivo"))

let soma = 0

// 2 Variaveis : numero e a somaDosNumeros
// Laço de repetição for
for(let i = 0; i <= n; i++){
    console.log(i)
    soma += i
}
