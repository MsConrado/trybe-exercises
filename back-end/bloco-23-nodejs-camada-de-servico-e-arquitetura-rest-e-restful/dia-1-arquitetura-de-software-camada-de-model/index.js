const express = require('express');
const bodyParser = require('body-parser');

const postUser = require('./middlewares/postUser');
const getUser = require('./middlewares/getUser');
const getUserId = require('./middlewares/getUserId');
const putUserId = require('./middlewares/putUserId');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.post('/user', postUser);

app.get('/user', getUser);

app.get('/user/:id', getUserId);

app.put('/user/:id', putUserId);

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
