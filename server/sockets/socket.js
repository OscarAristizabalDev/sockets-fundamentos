const { io } = require('../server');

/**
 * Funcion que permite detectar cuando un usuario se ha conectado
 */
io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    // Se emite un mensaje al cliente
    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // identifica cuando el cliente se desconecta
    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // con broadcast se le envíe el mensaje a todos los usuarios conectados al servidor
        cliente.broadcast.emit('enviarMensaje', data)

        /**if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN !'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL !!!!!!!'
            });
        }*/
    });

});