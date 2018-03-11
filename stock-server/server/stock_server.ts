import * as express from 'express';
import {Server} from 'ws';


const app = express();

app.get('/api/stock', (req, res) => {
    let result = stocks;
    let params = req.query;
    if (params.name) {
        result = result.filter(stock => stock.name.indexOf(params.name) !== -1);
    }
    res.json(result);
})

app.get('/api/stock/:id', (req, res) => {

    res.json(stocks.find(stock => stock.id == req.params.id));
})

const server = app.listen(8000, 'localhost', () => {
    console.log('the server started ,address is http://localhost:8000');
})

var subscriptions = new Set<any>();

const wsServer = new Server({port: 8085});
wsServer.on("connection", websocket => {
    subscriptions.add(websocket);

})

var messageCount = 0;
setInterval(() => {

    subscriptions.forEach(ws => {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify({messageCount: messageCount++}));
        } else {
            subscriptions.delete(ws);
        }
    })

}, 2000);


export class Stock {

    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {


    }

}


const stocks: Stock[] = [

    new Stock(1, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(2, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(3, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb']),
    new Stock(4, '2324', 1.99, 3.5, 'THIS IS FIRST STOCK', ['aaa', 'bbb'])

];




