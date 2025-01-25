//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Armazenar os nomes dos amigos
let amigos = [];

// Adicionar o nome do amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();  // Remove espaços em branco antes e depois

    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);  // Adiciona o nome na lista
        atualizarListaAmigos();  // Atualiza a lista de amigos na tela
        inputAmigo.value = '';  // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome válido!');
    }
}

// Atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Sortear um amigo secreto para um único nome
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    // Sorteia um amigo aleatório
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Remove o amigo sorteado da lista para que não seja sorteado novamente
    const amigosRestantes = amigos.filter(amigo => amigo !== amigoSorteado);

    // Sorteia o amigo secreto entre os amigos restantes
    const amigoSecreto = amigosRestantes[Math.floor(Math.random() * amigosRestantes.length)];

    // Exibe o resultado com a frase simples
    exibirResultado(amigoSorteado, amigoSecreto);
}

// Exibir o resultado do sorteio
function exibirResultado(amigoSorteado, amigoSecreto) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';  // Limpa os resultados anteriores

    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto é: ${amigoSecreto}!`;
    listaResultado.appendChild(li);
}
