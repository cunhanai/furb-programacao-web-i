var listaComidas = document.querySelectorAll('li > span')

for (var i = 0; i < listaComidas.length; i++) {
  ;(function (i) {
    listaComidas[i].addEventListener(
      'click',
      function () {
        alert(this.innerText)
      },
      false
    )
  })(i)
}

createEventListenerTabel(document.getElementsByTagName('td'))
createEventListenerTabel(document.getElementsByTagName('th'))

function createEventListenerTabel(lista) {
  for (var i = 0; i < lista.length; i++) {
    ;(function (i) {
      lista[i].addEventListener(
        'click',
        function () {
          if (this.style.backgroundColor !== 'rgb(209, 13, 13)') {
            this.style.backgroundColor = 'rgb(209, 13, 13)'
          } else {
            this.style.backgroundColor = 'rgb(246, 251, 255)'
          }
        },
        false
      )
    })(i)
  }
}
