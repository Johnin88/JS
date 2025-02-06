// faça um algoritmo que calcule a media ponderada das notas de tres provas. 
// A primeira e a segunda prova tem peso 1 e a terceira tem peso 2. 
// Ao final, mostrar a media do alun0o e indicar se o aluno foi aprovado ou reprovado. 
// A nota para parovação deve ser igual ou superior a60 pontos. 

let nota1 = Number(prompt('Digite a primeira nota (Entre 0 e 100)'))
let nota2 = Number(prompt('Digite a primeira nota (Entre 0 e 100)'))
let nota3 = Number(prompt('Digite a primeira nota (Entre 0 e 100)'))

// nota1*1, nota2*1, nota 3*2 / (soma dos pesos) ----> ponderada
// nota1*1, nota2*1, nova3*1 /  (soma dos pesos) ----> aritmetica

// mediaPonderada
let media = (nota1 * 1 + nota2 * 1 + nota3 * 2) / (1 + 1 + 2)
// 0 <= media <= 100

// avaliacao da condicao (mediaPonderada >= 60)
if(media >= 60){
    alert (`Aprovado, sua media foi ${media}`)
}
else{
    alert(`Reprovado, sua media foi $(media)`)
}

// se verdadeiro -> Aprovado
// Se falso -> Reprovado