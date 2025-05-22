// EXERCÍCIO 1 - SOMA
function somarNumeros() {
    let numero1 = parseFloat(document.getElementById('numero1').value)
    let numero2 = parseFloat(document.getElementById('numero2').value)
    let resultado = numero1 + numero2
  
    document.getElementById('resultadoSoma').textContent = "Resultado da soma: " + resultado
  }
  
  // EXERCÍCIO 1 - COMPARAÇÃO
  function compararNumeros() {
    let numero1 = parseFloat(document.getElementById('numero1').value)
    let numero2 = parseFloat(document.getElementById('numero2').value)
    let resultado = document.getElementById('resultadoComparacao')
  
    if (numero1 > numero2) {
      resultado.textContent = "Primeiro número é maior"
      resultado.style.backgroundColor = "red"
    } else if (numero2 > numero1) {
      resultado.textContent = "Segundo número é maior"
      resultado.style.backgroundColor = "green"
    } else {
      resultado.textContent = "Os dois números são iguais"
      resultado.style.backgroundColor = "yellow"
      resultado.style.color = "black"
    }
  }
  
  // EXERCÍCIO 2 - MOSTRAR TEXTO DIGITADO
  function mostrarTextoDigitado() {
    let texto = document.getElementById('campoTexto').value
    document.getElementById('textoDigitado').textContent = texto
  }
  
  // EXERCÍCIO 2 - MOSTRAR TAMANHO DO TEXTO
  function mostrarTamanhoTexto() {
    let texto = document.getElementById('campoTexto').value
    document.getElementById('tamanhoTexto').textContent = "O tamanho atual do texto é: " + texto.length
  }
  
  // EXERCÍCIO 3 - CONTADOR
  let contador = 0
  setInterval(function () {
    contador++
    document.getElementById('contador').textContent = contador
  }, 1000)
  
  // EXERCÍCIO 3 - ALERTA COMIDAS
  let comidas = document.querySelectorAll('#listaComidas li')
  comidas.forEach(function (comida) {
    comida.addEventListener('click', function () {
      alert("Você clicou em: " + comida.textContent)
    })
  })
  
  // EXERCÍCIO 3 - CLICAR NA TABELA
  let celulas = document.querySelectorAll('table td')
  celulas.forEach(function (celula) {
    celula.addEventListener('click', function () {
      celula.style.backgroundColor = "red"
    })
  })
  