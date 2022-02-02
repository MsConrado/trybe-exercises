const { Book } = require('../models');

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await Book.destroy({ where: { id } });

    if (!books) return res.status(404).json({ message: 'Não enocntrado!' });

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};
module.exports = {
  deleteBook,
};
