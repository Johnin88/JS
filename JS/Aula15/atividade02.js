// faça um programa que leia a nota de N alunos, em seguida exiba a media das notas

let N = Number(prompt('Digite a quantidade de alunos')) // Determinar quantas vezes o lanço vai ser reptido

let somaNotas = 0
let media = 0

for(let i = 1; i <= N; i++){
    let nota = Number(prompt('Digite a nota do aluno ' + i))
    console.log('Nota do aluno ' + i + ' ' + nota)
    somaNotas += nota // somaNotas = somaNotas + nota
}
media = somaNotas / N
console.log(`A media das notas é ${media}`)