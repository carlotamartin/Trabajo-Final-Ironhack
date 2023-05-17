function actualizarReloj() {
    // Obtienemos la hora actual
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    //Añadimos un 0 a la izquierda a los números menores de 10
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    // Formatea la hora como texto
    // Si es necesario, se antepone un 0 a la izquierda para que siempre haya dos dígitos en las horas, minutos y segundos, eso se hace con el método padStart()
    const horaTexto = `${hora.toString()}:${minutos.toString()}:${segundos.toString()}`;

    // Actualizamos el contenido del elemento div con la hora
    document.getElementById("reloj").innerHTML = horaTexto;
}

setInterval(actualizarReloj, 1000); // Llama a la función actualizarReloj cada segundo para actualizar el reloj cada 1000 milisegundos = 1 segundo
