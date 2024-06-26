function somar() {
  let numero1 = parseInt(document.getElementsByName('numero1')[0].value)
  let numero2 = parseInt(document.getElementsByName('numero2')[0].value)
  let resultado = document.getElementById('resuldadoSoma')

  if (verificarValor(numero1, numero2)) {
    resultado.innerText = numero1 + numero2
    resultado.classList.remove('text-default')
  }
}

function verificarMaior() {
  let numero1 = parseInt(document.getElementsByName('numero1')[0].value)
  let numero2 = parseInt(document.getElementsByName('numero2')[0].value)
  let resultadoBox = document.getElementById('resultado-maior-numero')
  let resultadoText = document.getElementById('resultado-maior-numero__text')

  if (verificarValor(numero1, numero2)) {
    if (numero1 > numero2) {
      resultadoText.innerText = 'Primeiro número é maior.'
      resultadoBox.classList.remove('green')
      resultadoBox.classList.remove('yellow')
      resultadoBox.classList.add('red')
      resultadoText.classList.remove('text-default')
    } else if (numero2 > numero1) {
      resultadoText.innerText = 'Segundo número é maior.'
      resultadoBox.classList.remove('yellow')
      resultadoBox.classList.remove('red')
      resultadoBox.classList.add('green')
      resultadoText.classList.remove('text-default')
    } else {
      resultadoText.innerText = 'Ambos são iguais.'
      resultadoBox.classList.remove('red')
      resultadoBox.classList.remove('green')
      resultadoBox.classList.add('yellow')
      resultadoText.classList.remove('text-default')
    }
  }
}

function verificarValor(numero1, numero2) {
  let permitir = true

  if (isNaN(numero1)) {
    document.getElementById('invalid-primeiro').classList.remove('hidden')
    permitir = false
  } else {
    document.getElementById('invalid-primeiro').classList.add('hidden')
  }

  if (isNaN(numero2)) {
    document.getElementById('invalid-segundo').classList.remove('hidden')
    permitir = false
  } else {
    document.getElementById('invalid-segundo').classList.add('hidden')
  }

  return permitir
}

function resetResult() {
  document.getElementById('resuldadoSoma').innerText = 'Realize uma ação'
  document.getElementById('resultado-maior-numero__text').innerText =
    'Realize uma ação'
}

document.addEventListener('input', () => {
  let soma = document.getElementById('resuldadoSoma')
  let numeroMaior = document.getElementById('resultado-maior-numero__text')
  let box = document.getElementById('resultado-maior-numero')

  soma.innerText = 'Realize uma ação'
  soma.classList.add('text-default')

  numeroMaior.innerText = 'Realize uma ação'
  numeroMaior.classList.add('text-default')
  box.classList.remove('red')
  box.classList.remove('green')
  box.classList.remove('yellow')
})
