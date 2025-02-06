let contador = 0
let repetir = true

while( repetir ) {
    contador = contador + 1
    console.log('Repetir o loop while')
    a = prompt('Digite um numero diferente de 2 para parar o loop')
    repetir = confirm('Deseja parar o loop?') // true ou false

}

console.log('fora do loop')
console.log(contador)