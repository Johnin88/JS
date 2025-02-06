// Faça a função saudacao
// Saudacao recebera dois parametros. Nome e Turno. 
// Saudacao deverá retorna um string com o ome e de acordo com o turno (manha, tarde e noite), mostrar "bom dia", "boa tarde", ou "boa noite" + o nome informado
// Exemplo: saudacao("joaquim", "Manha") ->< Bom dia,  Joaquim!

// 1º Passo criar a função com parametros
// 2º passo criar estrutura condicional (if/else if/else ou swuitch/case
// 3º passo retornar o resultado

// 4º invocar a funcao passando os parametros

function saudacao(nome, turno){
    let newTurno = turno

    if(newTurno === "manha") {
        console.log(`Bom dia, ${nome}`);

    }else if(newTurno === "tarde") {
        console.log(`Boa tarde, ${nome}`);
    
    }else if(newTurno === "noite") {
        console.log(`Boa noite, ${nome}`);
    }else {
        console.log("Digite um periodo valido")
    }
}

saudacao('Johnata', "manha");
saudacao('Johnata', "Tarde");
saudacao('Johnata', "noiTe");
saudacao('Johnata', "");
saudacao('Johnata');
saudacao('Johnata', "manha", "noite");

