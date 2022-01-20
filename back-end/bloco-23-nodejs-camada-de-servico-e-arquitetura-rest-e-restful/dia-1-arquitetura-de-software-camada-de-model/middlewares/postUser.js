const { insertUser } = require('../models/user');

const postUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: true });
  }

  if (typeof password !== 'string' || password.length < 6) {
    return res
      .status(400)
      .json({ message: "O campo 'password' deve ter pelo menos 6 caracteres" });
  }
  const { insertId } = await insertUser(firstName, lastName, email, password);

  return res.status(201).json({
    id: insertId,
    firstName,
    lastName,
    email,
  });
};

module.exports = postUser;
