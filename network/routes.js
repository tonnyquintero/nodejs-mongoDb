const express = require('express');
const message = require('../components/messages/network')

const routes = server => {
    server.use('/message', message);
}

module.exports = routes;