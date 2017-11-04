'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.post('/simplewebhook', function (req, res) {
    console.log('in webhook', req.body);
    let userValue = req.body.result && req.body.result.parameters && req.body.result.parameters.username ? req.body.result.parameters.username : 'Dheeraj';
    return res.json({
        speech: 'oh I c! your name is '+ userValue 
    });
});

server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and running...on "+process.env.PORT);
});