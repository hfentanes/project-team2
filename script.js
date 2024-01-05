const imagenes = document.querySelector('.slides');
const anteriorBtn = document.querySelector('.anterior');
const siguienteBtn = document.querySelector('.siguiente');
const playPauseBtn = document.querySelector('.play');
const radios = document.querySelectorAll('.indicador input[type="radio"]');

let indiceImagen = 0;




siguienteBtn.addEventListener('click', () => {
  if (indiceImagen < imagenes.children.length - 1) {
    indiceImagen++;} else {
        indiceImagen = 0; // Vuelve a la primera imagen al llegar al final
      }
    actualizarPosicion();
  
});

anteriorBtn.addEventListener('click', () => {
  if (indiceImagen > 0) {
    indiceImagen--;}else{
        indiceImagen = imagenes.children.length - 1; // Vuelve a la última imagen al llegar al principio
      }
    actualizarPosicion();
  
});

function actualizarPosicion() {
  imagenes.style.transform = `translateX(${-indiceImagen * 100}%)`;
  radios.forEach(radio => {
    radio.checked = false;
  });
  radios[indiceImagen].checked = true;
}


playPauseBtn.addEventListener('click', () => {
    const iconoActual = playPauseBtn.textContent; // Obtener el texto actual del botón
  
    if (iconoActual === "▶") {
     
      playPauseBtn.textContent = "||"; // Cambiar a ícono de pause
    } else {
      
      playPauseBtn.textContent = "▶"; // Cambiar a ícono de play
    }
  });

  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      indiceImagen = index;
      actualizarPosicion();
    });
  });
 
