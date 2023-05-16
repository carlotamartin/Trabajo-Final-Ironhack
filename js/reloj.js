function actualizarReloj() {
    // Obtienemos la hora actual
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    // Formatea la hora como texto
    // Si es necesario, se antepone un 0 a la izquierda para que siempre haya dos dígitos en las horas, minutos y segundos, eso se hace con el método padStart()
    const horaTexto = `${hora.toString()}:${minutos.toString()}:${segundos.toString()}`;

    // Actualizamos el contenido del elemento div con la hora
    document.getElementById("reloj").innerHTML = horaTexto;
}

setInterval(actualizarReloj, 1000); // Llama a la función actualizarReloj cada segundo para actualizar el reloj cada 1000 milisegundos = 1 segundo
