document.addEventListener('input', () => {
  let texto = document.getElementById('texto').value
  let conteudo = document.getElementById('conteudo')
  let tamanho = document.getElementById('tamanho')

  tamanho.innerText = 'Aperte o botão para ver o tamanho'
  tamanho.classList.add('text-default')

  if (!texto || !texto.trim()) {
    conteudo.innerText = 'Escreva um texto'
    conteudo.classList.add('text-default')
  } else {
    conteudo.innerText = texto
    conteudo.classList.remove('text-default')
  }
})

function setTamanho() {
  let tamanho = document.getElementById('tamanho')
  let length = document.getElementById('texto').value.length

  tamanho.innerText =
    length + ' ' + (length > 1 && length !== 0 ? 'caractéres' : 'caractére')

  tamanho.classList.remove('text-default')
}
