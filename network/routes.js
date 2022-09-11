const express = require('express');
const message = require('../components/messages/network')
const user = require('../components/users/network')
const chat = require('../components/chat/network')

const routes = server => {
    server.use(express.static('public'));
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}

module.exports = routes;