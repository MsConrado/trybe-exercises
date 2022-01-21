const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong!' }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
