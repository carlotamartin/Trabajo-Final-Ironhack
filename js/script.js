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


