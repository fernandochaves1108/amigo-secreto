//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//function adicionarAmigo(){
   // console.log('O botão foi clicado!')
//}
    
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        // Adiciona o nome ao array e atualiza a lista na tela
        amigos.push(nomeAmigo);
        input.value = ''; // Limpa o campo de entrada
        mostrarListaAmigos();
    } else if (!nomeAmigo) {
        alert('Por favor, digite um nome válido!');
    } else {
        alert('Esse nome já foi adicionado!');
    }
}

// Função para mostrar a lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista anterior

    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto aleatório
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos 2 amigos para sortear!');
        return;
    }

    // Sorteia um amigo aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores
    const li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);
    listaAmigos.innerHTML = '';
}