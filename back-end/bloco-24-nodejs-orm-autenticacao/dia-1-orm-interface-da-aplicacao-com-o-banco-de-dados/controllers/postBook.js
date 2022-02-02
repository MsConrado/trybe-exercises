const { Book } = require('../models');

const postBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const books = await Book.create({ title, author, pageQuantity });
    
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};
module.exports = {
  postBook,
};
