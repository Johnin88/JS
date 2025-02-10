// construa uma funcao chamada calculadora
// essa funcao deve receber três informações do usuario
// primeiro numero, segundo numero e terceiro a operacao matematica (+, -, *, /)
// a funcao deve retornar o resultado da operacao matematica como um alert
// ex: calculadora(10, 20, '+') -> 30  

function calculadora(num1, num2, operacao) {
    let resultado = 0
    if (operacao == '+') {
        resultado = num1 + num2
    } else if (operacao == '-') {
        resultado = num1 - num2
    } else if (operacao == '*') {
        resultado = num1 * num2
    } else if (operacao == '/') {
        resultado = num1 / num2
    }
    return resultado
}   

let num1 = Number(prompt('Digite o primeiro numero: '))
let num2 = Number(prompt('Digite o segundo numero: '))
let operacao = prompt('Digite a operacao matematica: ')

alert(calculadora(num1, num2, operacao))