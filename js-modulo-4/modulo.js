// localstorage permite guardar datos en el navegador del usuario, incluso después de cerrar la pestaña o el navegador.

//Guardar un dato en localStorage
localStorage.setItem('nombre', 'Delvis');

//Recuperar un dato de localStorage
const nombre = localStorage.getItem('nombre');
console.log(nombre); // Imprime: Delvis