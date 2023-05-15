
// Mensaje para cuando se envía el formulario

// Primero creamos una constante que llame a la clase del botón
const btnForm = document.querySelector('.btn-submit');

//Mensaje

const mensaje = document.createElement('p');
mensaje.innerHTML = 'Gracias por tu mensaje, nos ayudará a mejorar nuestro servicio.'

//Creamos una función para que cada ves que pulses al botón se muestre el mensaje
btnForm.onclick = function (event) {
    event.preventDefault(); //Evitamos que se vuelva a cargar la página
    //Comprobamos que funciona

    console.log(mensaje);
    //Añadimos el mensaje al formulario
    document.querySelector('#mensaje-enviado').appendChild(mensaje);
    //Limpiamos el formulario
    document.querySelector('#name').value = ' ';
    document.querySelector('#email').value = ' ';
    document.querySelector('#message').value = ' ';
}

