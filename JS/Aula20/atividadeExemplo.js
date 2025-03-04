let pessoas = [
    {nome: 'Ana', idade: 12},
    {nome: 'Cleitinho', idade: 12},
    {nome: 'Clara', idade: 50},
    {nome: 'Pedro', idade: 18},
    {nome: 'Maria', idade: 28}
]

let funcaoFiltro = (pessoa) => {
    if(pessoa.idade >=18){
        // return true
        return pessoa
    }
}

let pessoasMaiorIdade = pessoas.filter(funcaoFiltro)

console.log(pessoasMaiorIdade)
console.log(pessoas)