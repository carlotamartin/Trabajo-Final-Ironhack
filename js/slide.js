
//TERCER DOM
//Vamos a hacer un slideshow con las imágenes

//Seleccionamos las imágenes
const imagenes = document.querySelectorAll('.img-galeria');
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

//Seleccionamos el botón de cerrar
const cerrarLight = document.querySelector('.close');

//Recorremos las imágenes
imagenes.forEach(imagen => {
    imagen.onclick = function () {
        // Cuando hagamos click en la imagen se mostrará
        aparecerImagen(imagen.getAttribute('src'));
    }
})

//Creamos una función para que al hacer click en la imagen se cierre
contenedorLight.onclick = function () {
    contenedorLight.setAttribute('class', 'imagen-light');
    imagenLight.setAttribute('class', 'agregar-imagen');
}

//Creamos una función para que aparezca la imagen
const aparecerImagen = (imagen) => {
    imagenLight.src = imagen;
    contenedorLight.setAttribute('class', 'imagen-light show');
    imagenLight.setAttribute('class', 'agregar-imagen showImage');

}