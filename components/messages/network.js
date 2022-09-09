const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

var app = express();

app.get('/', function (req, res) {
    console.log(req.headers);
    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes');
});

app.post('/', function (req, res) {
    //res.send('Mensaje añadido');

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)   
    })
    .catch(e => {
        response.error(req, res, 'Información invalida', 400, 'Error al loguear al usuario');
    })

});

app.patch('/', function (req, res) {
    res.send('Mensaje actualizado');
})

app.delete('/', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje ' + req.body.text + ' eliminado correcatamente');
});

module.exports = app;