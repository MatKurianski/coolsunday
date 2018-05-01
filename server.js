
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
var auth = require('./autenticacao');

app.get('/api/hello', (req, res) => {
	  res.send({ express: 'Hello From Express' });
});

app.get('/login', function (req, res) {
  res.send('http://localhost:1337/login');
});

app.listen(port, () => console.log(`Listening on port ${port}`));


