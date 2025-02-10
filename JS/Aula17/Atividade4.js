// construa uma funcao chamada calcularAlert que ira receber 3 parametros (numero1, numero2, funcaoOperacao)
// a operação será uma funcao de callback que deverá ser chamada dentro da funcao calcularAlert
// a funcao de callback deverá receber 2 parametros (numero1, numero2)
// retornar o resultado da operação matematica correspondente no alert

function calcularAlert(numero1, numero2, funcaoOperacao){
    function funcaoOperacao(numero1, numero2){
        return numero1 + numero2
    }
}

