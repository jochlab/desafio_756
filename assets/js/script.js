var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$("#torrespaine").click(function () {
    alert("Quedan solamente 5 paquetes ¡reserva ahora!");
});

$("#atacama").click(function () {
    alert("Quedan solamente 2 paquetes ¡reserva ahora!");
});

$("#norte").click(function () {
    alert("8 paquetes comprados hace 15 minutos ¡reserva ahora!");
});

$("#araucania").click(function () {
    alert("¡reserva este Paquete y estarás apoyando a las Comunidades locales!");
});

$("#contactenos").click(function () {
    alert("Su mensaje ha sido enviado exitosamente.");
});