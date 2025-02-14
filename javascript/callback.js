function saudacao(nome, callback) {
    console.log('Olá, ' + nome + '!');
    callback();  // Chama a função de callback
}

function despedida() {
    console.log('Até logo!');
}

saudacao('Pessoa', despedida);  // Saída: Olá, Pessoa!  /  Até logo!

/* Outro exemplo de Função própria e callback */

// Função que calcula a pontuação e chama o callback após o cálculo
function calcularPontuacao(notas, callback) {
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    callback(total);  // Chama a função callback e passa o resultado total
}

// Função callback que exibe a pontuação final
function exibirPontuacao(pontuacao) {
    console.log("Sua pontuação final é: " + pontuacao);
}

// Função callback que verifica se o jogador passou de nível
function verificarNivel(pontuacao) {
    if (pontuacao >= 50) {
        console.log("Você passou para o próximo nível!");
    } else {
        console.log("Tente novamente, você precisa de mais pontos!");
    }
}

// Usando a função calcularPontuacao e passando diferentes callbacks
const notas = [10, 20, 15, 5];  // Um array com as notas do jogador
calcularPontuacao(notas, exibirPontuacao);  // Exibe a pontuação
calcularPontuacao(notas, verificarNivel);   // Verifica o nível

