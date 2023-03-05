// function tocaSom (idElementoAudio){ 
//     document.querySelector(idElementoAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// // enquanto
// while(contador < listaDeTeclas.length){

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1]  
//     // template String
//     const idAudio = `#som_${instrumento}`
//     console.log(idAudio)

//     tecla.onclick = function(){
//         tocaSom(idAudio)
//     };

//     contador = contador + 1;

//     console.log(contador);
// }


function tocaSom (idElementoAudio){ 
    document.querySelector(idElementoAudio).play();
}

if (elemento != null && elemento.localName ==='audio'){
    elemento.play();
}
else{
    // alert('Elemento não encontrado);
    console.log('Elemento não encontrado ou seletor inválido');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]     
    const idAudio = `#som_${instrumento}`; // template String

    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    
    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
   
    // console.log(contador);

}


