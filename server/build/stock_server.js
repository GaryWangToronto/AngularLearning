"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/', function (request, response) { return response.send('This is home page!'); });
app.get('/api/stock', function (request, response) {
    response.json(stocks);
});
app.get('/api/stock/:id', function (request, response) {
    response.json(stocks.find(function (stock) { return stock.id == request.params.id; }));
});
var server = app.listen(8080, 'localhost', function () {
    console.log('The server is startup, website is http://localhost:8080');
});
var wsServer = new ws_1.Server({ port: 8081 });
wsServer.on('connection', function (websocket) {
    websocket.send('Welcome to connect server!');
    websocket.on('message', function (message) {
        console.log("Received message from client, the message content is :" + message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("The message pushed on timer");
        });
    }
}, 2000);
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categorires) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categorires = categorires;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(2, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(3, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(4, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb'])
];
