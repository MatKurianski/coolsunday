// const sqlite3 = require('sqlite3').verbose();
// const express = require("express");
// const bodyParser = require('body-parser');

// let db = new sqlite3.Database('./Server/banco.db', (err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log("connected to database");
// });

// let tableCreate = `
// CREATE TABLE IF NOT EXISTS produtos (
//   produto_id integer PRIMARY KEY,
//   preco text NOT NULL,
//   nome text NOT NULL,
//   image_src text
// );`;

// db.run(tableCreate, (err) => {
//     if (err) console.log(err.message);
// });

// const insertProduct = (db, produto) => {
//     db.run(`INSERT INTO produtos (
//             preco, nome, image_src)
//             VALUES(?, ?, ?)`
//           , [produto.preco, produto.nome, produto.src]
//           , (err) => {if (err) console.log(err)});
// };

// const getProducts = (db, callback) => {
//     db.all(`SELECT
//               preco preco,
//               nome nome,
//               image_src src
//             FROM produtos`
//               , []
//               , callback);
// };

// const app = express();

// let cards = [
//     {preco: "3.00", nome: "Batata doce", src: "/resources/images/produto001.jpg"},
//     {preco: "4.50", nome: "Frango", src: null},
// ];

// cards = [];

// app.use('/resources', express.static(__dirname + '/../Client/src/site/resources'));
// app.use(bodyParser.json());


// app.get("/api", function(req, res) {
//     res.send("<h1>Servidor rodando com ExpressJS</h1>");
// });

// app.get('/api/get-cards', (req, res) => {
//     let produtos = getProducts(db, (err, produtos) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(JSON.stringify(produtos));
//         }
//     });
// });

// app.post('/api/post-card', (req, res) => {
//     cards.push(req.body);
//     console.log(req.body);
//     insertProduct(db, req.body);
//     res.send(JSON.stringify(cards));
// });

// app.listen(5000, () => console.log("Servidor rodando local na porta 5000"));

const fs = require('fs');
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     setTimeout(() => {
//         next();
//     }, 3000);
// });

app.get('/cards', (req, res) => {
    fs.readFile('Server/cards.json', 'utf-8', (err, data) => {
        data = JSON.parse(data);
        res.send(data);
    });
})

// app.get('/teste', async (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     let cards = await fs.readFile('Server/cards.json', (err, data) => {
//         console.log(data);
//     });
//     console.log(cards);
// })

app.listen(5000);