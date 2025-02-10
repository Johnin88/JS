function minhaFuncao() {
    // funcoes sem parametros
    console.log('Funcao sem parametros')
}

function somar(a, b) {
    console.log(a + b)
}

// somar(2, 3)
// somar(10, 20)
// // passando parametros a mais
// somar(2, 3, 4, 5) // os parametros a mais serão ignorados)

// // passando parametros a menos
// somar(2) // os parametros a menos receberao undefined
// // 2 + undefined = NaN

let escolha = confirm("Deseja para o loop?") // retorna true ou false

let texto = prompt("Digite uma palavra") // retorna uma string

let retornoAlerta = alert("Qualquer coisa") // retorna undefined ou nao tem retorno

let retornoConsole = console.log("Qualquer coisa") // nao retorna nada
