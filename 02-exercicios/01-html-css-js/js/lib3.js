function getElements() {
  var elementos = [...document.getElementsByTagName('*')]

  document.getElementById('elementos-message').classList.add('hidden')
  document.getElementById('qtdElementos-default').classList.add('hidden')

  let qtdElementos = document.getElementById('qtdElementos')
  qtdElementos.classList.remove('hidden')

  qtdElementos.innerText = `${elementos.length} ${
    elementos.length > 1 && elementos.length !== 0 ? 'elementos' : 'elemento'
  }`

  for (let elemento of elementos) {
    let novoElemento = document.createElement('li')
    let texto = document.createElement('span')

    texto.appendChild(document.createTextNode(elemento.tagName))
    novoElemento.appendChild(texto)

    let lista = document.getElementById('lista-elementos')

    lista.classList.remove('hidden')
    lista.appendChild(novoElemento)
  }
}

function adicionarLinha() {
  {
    let novaColuna1 = document.createElement('td')
    let novaColuna2 = document.createElement('td')
    let novaColuna3 = document.createElement('td')
    let novaLinha = document.createElement('tr')

    novaLinha.appendChild(novaColuna1)
    novaLinha.appendChild(novaColuna2)
    novaLinha.appendChild(novaColuna3)

    let tabela = document.getElementById('tabela')
    tabela.appendChild(novaLinha)

    document.getElementById('elementos-message').classList.remove('hidden')
    document.getElementById('lista-elementos').classList.add('hidden')
  }
}
