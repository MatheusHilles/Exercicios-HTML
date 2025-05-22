const palavraSecreta = "LIVRO";
let tentativaAtual = 0;
const maxTentativas = 6;

document.addEventListener("DOMContentLoaded", () => {
  const enviarBtn = document.getElementById("enviar");
  const reiniciarBtn = document.getElementById("reiniciar");

  enviarBtn.addEventListener("click", verificarPalavra);
  reiniciarBtn.addEventListener("click", reiniciarJogo);
});

function verificarPalavra() {
  const input = document.getElementById("entrada");
  const tentativa = input.value.toUpperCase();

  if (tentativa.length !== 5) {
    mostrarMensagem("Digite exatamente 5 letras.");
    return;
  }

  if (tentativaAtual >= maxTentativas) return;

  const linha = document.createElement("div");
  linha.classList.add("linha");

  const letras = palavraSecreta.split("");
  const usada = [...letras];

  for (let i = 0; i < 5; i++) {
    const caixa = document.createElement("div");
    caixa.classList.add("caixa");
    caixa.textContent = tentativa[i];

    if (tentativa[i] === palavraSecreta[i]) {
      caixa.classList.add("correta");
      usada[i] = null;
    }

    linha.appendChild(caixa);
  }

  for (let i = 0; i < 5; i++) {
    const caixa = linha.children[i];
    if (!caixa.classList.contains("correta")) {
      const index = usada.indexOf(tentativa[i]);
      if (index !== -1) {
        caixa.classList.add("presente");
        usada[index] = null;
      } else {
        caixa.classList.add("errada");
      }
    }
  }

  document.getElementById("tabuleiro").appendChild(linha);
  tentativaAtual++;
  document.getElementById("entrada").value = "";

  if (tentativa === palavraSecreta) {
    mostrarMensagem("Parabéns! Você acertou!");
    desativarInput();
  } else if (tentativaAtual === maxTentativas) {
    mostrarMensagem(`Fim de jogo! A palavra era "${palavraSecreta}".`);
    desativarInput();
  }
}

function mostrarMensagem(msg) {
  document.getElementById("mensagem").textContent = msg;
}

function desativarInput() {
  document.getElementById("entrada").disabled = true;
  document.getElementById("enviar").disabled = true;
}

function reiniciarJogo() {
  tentativaAtual = 0;
  document.getElementById("tabuleiro").innerHTML = "";
  document.getElementById("mensagem").textContent = "";
  document.getElementById("entrada").disabled = false;
  document.getElementById("enviar").disabled = false;
  document.getElementById("entrada").value = "";
  document.getElementById("entrada").focus();
}