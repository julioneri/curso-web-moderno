// Estratégia para gerar um valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))



// Formas alternativas de gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))



// Valor padrão do ECMAScript 2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

/* O operador ??= (atribuição com coalescência nula) permite definir valores padrão diretamente dentro da função, sem precisar reatribuir.

Mais sobre isso: Esta mais atual de todas: a atribuição com coalescência nula (??=), que foi introduzida no ES12 (2021).
*/

function configurarTema(opcoes) {
    opcoes.tema ??= "claro" // Apenas define se for null ou undefined
    opcoes.fonte ??= "Arial"
    console.log(opcoes)
}

configurarTema({})
configurarTema({ tema: "Escuro" })
configurarTema({ fonte: "Verdana" })
configurarTema({ tem: "Escuro", fonte: "Verdana" })
