//instacia del socket
var socket = io();
// Escuchar
// connect, evento que permite identificar el momento en que se conecta usuario al servidor
socket.on('connect', function() {
    console.log(`conectado al servidor`);
});
// Escuchar
// disconect, evento que identifica cuando un usuario pierde conexion con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Oscar',
    mensaje: 'Hola Mundo'
}, function(respuesta) {
    console.log('respuesta server: ', respuesta);
});

// escuchar información enviada desde el servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});