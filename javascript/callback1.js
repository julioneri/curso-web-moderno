const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(nome, indice) {
    console.log(indice)
})

fabricantes.forEach(nome => console.log(nome))

// Usando um placeholder ( _ ) para ignorar o primeiro argumento
fabricantes.forEach((_, indice) => console.log(indice + 1))
