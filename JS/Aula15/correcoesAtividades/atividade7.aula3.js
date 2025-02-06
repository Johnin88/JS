//Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

let cor = prompt('Digite a cor da etiqueta do produto: \n Verde \n Amarelo \n Azul \n Vermelho')

cor = cor.toLowerCase() // minuscula

// Verde ou Amarelo ou Azul ou Vermelho -> ||

//ROXO: false / false / false / false -> false

//AMARELO: false / true / false / false -> true

//Verde e Amarelo e Azul e Vermelho -> &&

//ROXO: false / falso / false / false -> true

//AMARELO: false / true / face false -> false

while( cor != 'verde' && cor != 'amarelo' && cor != 'azul' && cor != 'vermelho'){ 
    cor = prompt('Você digitou uma cor não válida, digite novamente: \n Verde \n Amarelo \n Azul \n Vermelho')
}

console.log('Cor da etiqueta: ' + cor)