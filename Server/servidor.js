const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

let cards = [
    {preco: "3.00", nome: "Batata doce", src: "/resources/images/produto001.jpg"},
    {preco: "4.50", nome: "Frango", src: null},
];

app.use('/resources', express.static(__dirname + '/../Client/src/site/resources'));
app.use(bodyParser.json());


app.get("/api", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

app.get('/api/get-cards', (req, res) => {
    res.send(JSON.stringify(cards));
});

app.post('/api/post-card', (req, res) => {
    cards.push(req.body);
    res.send(JSON.stringify(cards));
});

app.listen(5000, () => console.log("Servidor rodando local na porta 5000"));
