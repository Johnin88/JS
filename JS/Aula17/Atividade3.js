/* Escreva uma função que receba como parametro o valor do saque realizado pelo cliente de um banco e retorne quantras notas de cada valor serão necessárias para atender ao saque com a menor quantidade de notas possivel. Serão utilizadas notas de 100, 50, 20, 10, 5, 2 e 1 real. */

function saque(valorSaque){
    let notas100 = 0
    let notas50 = 0
    let notas20 = 0
    let notas10 = 0
    let notas5 = 0
    let notas2 = 0
    let notas1 = 0

    while (valorSaque >= 100) {
        valorSaque -= 100
        notas100++
    }
    while (valorSaque >= 50) {
        valorSaque -= 50
        notas50++
    }
    while (valorSaque >= 20) {
        valorSaque -= 20
        notas20++
    }
    while (valorSaque >= 10) {
        valorSaque -= 10
        notas10++
    }
    while (valorSaque >= 5) {
        valorSaque -= 5
        notas5++
    }
    while (valorSaque >= 2) {
        valorSaque -= 2
        notas2++
    }
    while (valorSaque >= 1) {
        valorSaque -= 1
        notas1++
    }
    console.log(`Notas de 100: ${notas100}`)
    console.log(`Notas de 50: ${notas50}`)
    console.log(`Notas de 20: ${notas20}`)
    console.log(`Notas de 10: ${notas10}`)
    console.log(`Notas de 5: ${notas5}`)
    console.log(`Notas de 2: ${notas2}`)
    console.log(`Notas de 1: ${notas1}`)
    if (valorSaque > 0) {
        console.log(`Resto: ${valorSaque}`)
    } else {
        console.log(`Saque realizado com sucesso`)
        if (notas100 > 0) {
            console.log(`Notas de 100: ${notas100}`)
        }
        if (notas50 > 0) {
            console.log(`Notas de 50: ${notas50}`)
        }
        if (notas20 > 0) {
            console.log(`Notas de 20: ${notas20}`)
        }
        if (notas10 > 0) {
            console.log(`Notas de 10: ${notas10}`)
        }
        if (notas5 > 0) {
            console.log(`Notas de 5: ${notas5}`)
        }
        if (notas2 > 0) {
            console.log(`Notas de 2: ${notas2}`)
        }
        if (notas1 > 0) {
            console.log(`Notas de 1: ${notas1}`)        
        }
    }}

console.log(saque(prompt('Digite o valor do saque'))) // console.log(saque(150))





// 150
// notas de 100 = 1
// notas de 50 = 1

// enquanto valorSaque > 100 {
//  valorSaque -= 100
//  notas100++
// }

// while(condição){

// }
