// uma casa loterica tem 2 filas
// a fila preferencial tem 5 vagas(para atendimento)
// a fila normal tem 8 vagas(para atendimento)

let filaNormal =- ["Augusta,", "Leda", 'Marileide', 'Emmanuelle', 'Rebeca', 'Fernando', 'Mikaele', 'Fabio', 'Cintia', 'Aurieliton', 'Johnata', 'Janielly']

let filaPreferencial = ['Marilane', 'Samanta', 'Adriana', 'Vanessa', 'Darlyane', 'Priscila', 'Marcus', 'Glayciane', 'Isabel', 'Breno', 'Neto', 'Yasmin']

let filaAtendidos = []

// serão atendidos os 8 primeiros da fila normal
// e os 3 utlimos da fila preferencial
// totos os atendidos devem ser adicionados a uma terceira fila 'filaAtendidos'

while(filaNormal.length > 0 && filaPreferencial.length > 0){
    filaAtendidos.push(filaNormal.shift())
    filaAtendidos.push(filaPreferencial.pop())
}

while(filaNormal.length > 0){
    filaAtendidos.push(filaNormal.shift())
}

while(filaPreferencial.length > 0){
    filaAtendidos.push(filaPreferencial.pop())
}

for(let i = 0; i < filaAtendidos.length; i++){
    console.log(filaAtendidos[i])
}
