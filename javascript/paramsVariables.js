function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma("a", "b", "c"))

/*O objeto 'arguments' permite acessar todos os valores passados para a função, mesmo que a função não tenha parâmetros declarados entre os parênteses.

Mais sobre isso: 'arguments' é um objeto especial disponível dentro de funções tradicionais (não funciona em funções de seta) que contém todos os argumentos passados para a função, independentemente de quantos parâmetros foram definidos.
*/

function exemplo01() {
    console.log(arguments); // Exibe todos os argumentos passados
}

exemplo01(10, 20, 30); 

///

function exemplo02() {
    console.log(arguments[0]); // Primeiro argumento
    console.log(arguments[1]); // Segundo argumento
}

exemplo02(10, 20);