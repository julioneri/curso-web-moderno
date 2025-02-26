const notas = [7.7, 6.5, 5.3, 9.0, 3.7, 7.1, 9.5]

// Sem callback
let notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)



// Com callback
let notasBaixas2 = []

const notasMenorQue7 = nota => nota < 7
notasBaixas2 = notas.filter(notasMenorQue7)
console.log(notasBaixas2)


let notasBaixas3 = []

notasBaixas3 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas3)
