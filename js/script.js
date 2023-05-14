// Hacemos funcionar el bóton para abrir el menú

// Primero creamos una constante que llame a la clase del botón
const btnMenu = document.querySelector('.header__img');

// Creamos una constante para abrir el menú
let menu = document.getElementsByClassName("menu-navigation")[0];


// Creamos una función para que al hacer click en el botón se abra el menú
btnMenu.onclick = function () {
    menu.setAttribute('class', 'menu-navigation spread')

    //Si tocamos cualquier parte de la pantalla se cerrará el menú
    window.onclick = function (event) {
        if (event.target != btnMenu) {
            menu.setAttribute('class', 'menu-navigation')
        }
    }
}


// Mensaje para cuadno se envía el formulario

// Primero creamos una constante que llame a la clase del botón
const btnForm = document.querySelector('.btn-submit');

//Mensaje

const mensaje = document.createElement('p');
mensaje.innerHTML = 'Gracias por tu mensaje, nos ayudará a mejorar nuestro servicio.'

//Creamos una función para que cada ves que pulses al botón se muestre el mensaje
btnForm.onclick = function () {
    event.preventDefault();
    //Comprobamos que funciona
    console.log(mensaje);
    //Añadimos el mensaje al formulario
    document.querySelector('#mensaje-enviado').appendChild(mensaje);

    //Limpiamos el formulario
    document.querySelector('#form').reset();
    

}


