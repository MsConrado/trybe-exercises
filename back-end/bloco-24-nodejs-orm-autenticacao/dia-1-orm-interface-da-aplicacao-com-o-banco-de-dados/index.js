const express = require('express')
const bodyParser = require('body-parser')
const { getBooks } = require('./controllers/getBooks')
const { getById } = require('./controllers/getById')
const { postBook } = require('./controllers/postBook')
const { deleteBook } = require('./controllers/deleteBook')
const { postBookId } = require('./controllers/postBookId')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/books', getBooks);
app.get('/book/:id', getById);
app.post('/book', postBook);
app.post('/book/:id', postBookId);
app.delete('/book/:id', deleteBook);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))