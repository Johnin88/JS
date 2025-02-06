// Crie uma função que receba um número do usuário e mostre o quadrado dele no console
// Execute a função
function numeroQuadrado(){
    let numero = Number(prompt("Digite um número: "))

    let quadrado = Math.pow(numero, 2) // numero **2 // ou numero * numero

    alert(`O quadrado de ${numero} é ${quadrado}`)
}

numeroQuadrado()
