let inteiro = 10
console.log(inteiro)
let soma = inteiro + 2
let subtracao = inteiro - 2
let multiplicacao = inteiro * 2
let divisao = inteiro / 2


let prontoFloat = 10.5

let numString = '10.5'
let somaString = inteiro + 2
// o operador + concatena e soma 
// concatena palavras mais qualquer coisa
// soma numeros
let subtracaoString = numString - 2
let multiplicacaoString = numString * 2
let divisaoString = numString / 2
console.log(somaString)
console.log(subtracaoString)
console.log(multiplicacaoString)
console.log(divisaoString)
























// converter string para number
let n1 = '10' //int
let n2 = '20.5' //float
// o JS compreende essas Strings de numeros para operaçoes matematicas (substracao, multiplicacao, divisao etc), mas nao para SOMA (realiza concatenacao)
console.log(n1 + 1) //101
console.log(n2 - 1) //19.5
console.log(n1 * 10) //100
console.log(n2 / 10) //2.05

// para os casos de operaçoes com numeros no formato st4ring precisamos converter a string para number (boa pratica)

let numero1convertido = Number(n1)
let numero2convertivo = Number(n2)
console.log(numero1convertido + 1)
console.log(numero2convertivo + 2)

// Crie uma variavel que peça (promp) o salario do usuario e convertqa para (number (salario))
// em seguida adiciona mais 1000 dinheiro ao salario e mostre o novo salario no console

let salario = prompt('qual o seu salario?') //sempre retorna uma STRING
salario = Number(salario)
salario = salario + 1000
console.log(salario)



