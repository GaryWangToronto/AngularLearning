import * as express from 'express';
import {Server} from 'ws';

const app = express();

app.get('/', (request, response) => response.send('This is home page!'));

app.get('/api/stock', (request, response) => {
    response.json(stocks)
});


app.get('/api/stock/:id', (request, response) => {
    response.json(stocks.find((stock) => stock.id == request.params.id));
});


const server = app.listen(8080, 'localhost', () => {
    console.log('The server is startup, website is http://localhost:8080');
})

const wsServer = new Server({port: 8081});
wsServer.on('connection', websocket => {

    websocket.send('Welcome to connect server!');
    websocket.on('message', message => {
        console.log("Received message from client, the message content is :" + message);

    });

})

setInterval(() => {
    if (wsServer.clients) {
        wsServer.clients.forEach(client => {
            client.send("The message pushed on timer");

        })

    }

}, 2000);

export class Stock {

    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categorires: Array<string>) {


    }

}

const stocks: Stock[] = [

    new Stock(1, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(2, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(3, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(4, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb'])

];