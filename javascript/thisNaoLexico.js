/*
O que significa "this" não léxico?

Quando dizemos que this não é léxico, significa que ele não é determinado pelo local onde a função foi escrita, mas sim pelo local onde ela foi chamada.

Ou seja, em funções normais (function), o valor de this pode mudar dependendo do contexto de execução.
*/

function mostrar() {
    // Se um objeto chama a função como método, então this dentro da função aponta para esse objeto.
    console.log(this); // Quem chamou a função?
}

const obj1 = { nome: "Objeto 1", metodo: mostrar }
const obj2 = { nome: "Objeto 2", metodo: mostrar }

obj1.metodo()
obj2.metodo()

// Aqui, this muda conforme o objeto que chama a função. Isso mostra que ele não é léxico.
