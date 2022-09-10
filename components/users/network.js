const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

var app = express();

app.get('/', function (req, res) {
    const filterUser = req.query.user || null;
    controller.getUsers(filterUser)
    .then((userList) => {
        response.success(req, res, userList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    })
});

app.post('/', function(req, res) {
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req, res, data, 201)
    })
    .catch(err => {
        response.error(req, res, 'Internal error', 500, err)
    })
})

module.exports = app;