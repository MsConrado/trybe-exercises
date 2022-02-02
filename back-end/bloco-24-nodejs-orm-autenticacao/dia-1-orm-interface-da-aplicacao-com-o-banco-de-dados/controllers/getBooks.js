const { Book } = require('../models');
const getBooks = async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};
module.exports = {
  getBooks,
};
