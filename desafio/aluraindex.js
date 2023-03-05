

const ListaDeTeclas = document.querySelectorAll('input[type=button]');
const entrada = document.querySelector('input[type=tel]');

for (let i = 0; i < ListaDeTeclas.length; i++) {

  const tecla = ListaDeTeclas[i];

tecla.onclick = function()  {
  entrada.value += tecla.value;
  }
}