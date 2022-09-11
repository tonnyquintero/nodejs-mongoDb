const express = require('express');
const multer = require('multer');
const path = require('path')
//const upload = multer({ dest: 'uploads/' })
const response = require('../../network/response');
const controller = require('./controller');


var app = express();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/files')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })





app.get('/', function (req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    })
});

app.post('/', upload.single('file'), function (req, res) {
    //res.send('Mensaje añadido');

    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
        response.success(req, res, fullMessage, 201)   
    })
    .catch(e => {
        response.error(req, res, 'Información invalida', 400, 'Error al loguear al usuario');
    })

});

app.patch('/:id', function (req, res) {

    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error Interno', 500, e)
    })
})

app.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    })
});

module.exports = app;