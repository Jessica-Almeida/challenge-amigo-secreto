let amigos = [];

const mensagem = document.getElementById("mensagem");
const inputNome = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const botaoSortear = document.getElementById("btnSortear");
const botaoReiniciar = document.getElementById("btnReiniciar");


function mostrarMensagem(texto = "", cor = "") {
    mensagem.textContent = texto;
    mensagem.style.color = cor;
}

function atualizarLista() {
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function adicionarAmigo() {
    let nome = inputNome.value.trim();

    if (nome === "") {
        mostrarMensagem("Por favor, insira um nome.", "#FF0000");
        return;
    }

    const somenteLetras = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!somenteLetras.test(nome)) {
        mostrarMensagem("Apenas letras são permitidas.");
        return;
    }


    if (amigos.includes(nome)) {
        mostrarMensagem("Esse nome já foi adicionado!", "#FF0000");
        inputNome.value = "";
        inputNome.focus();
        return;
    }

    amigos.push(nome);
    atualizarLista();
    mostrarMensagem(`Amigo "${nome}" adicionado!`, "#008000");

    inputNome.value = "";
    inputNome.focus();
}

 function sortearAmigo() {
      if (amigos.length < 3) {
        mostrarMensagem("Adicione pelo menos 3 amigos para realizar o sorteio.", "#FF0000"); 
        return;
      }

      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const amigoSorteado = amigos[indiceAleatorio];

      resultado.innerHTML = `O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong>`;
      botaoSortear.disabled = true;
        botaoReiniciar.style.display = "inline-block";
      mostrarMensagem();
    }

    function reiniciarJogo() {
      amigos = [];
      listaAmigos.innerHTML = "";
      resultado.innerHTML = "";
      botaoSortear.disabled = false;
      botaoReiniciar.style.display = "none";
      mostrarMensagem("Jogo reiniciado! Adicione novos amigos.", "#008000");
    }