// crie 4 funcoes para as operacoes matematicas
// soma, subtracao, multiplicacao e divisao
// as funcoes devem receber 2 parametros e retornar o resultado correpondente
// para divisão checar se o segundo parametro e maior que zero

function soma(a, b){
    return a + b
}

console.log(soma(10, 20))

function subtracao(a, b){
    return a - b
}  
console.log(subtracao(10, 20))

function multiplicacao(a, b){
    return a * b
}
console.log (multiplicacao(10, 20))

function divisao(a, b){
    if(b > 0){
        return a / b
    }   
    else{
        return 'Não é possivel divisão por zero'
    }
}
console.log(divisao(20, 10))