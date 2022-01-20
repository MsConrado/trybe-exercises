const { updateId } = require('../models/user');

const putUserId = async (req, res) => {
  const { id } = req.params;
  
  const { firstName, lastName, email, password } = req.body;

  
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: true });
  }
  
  if (typeof password !== 'string' || password.length < 6) {
    return res
    .status(400)
    .json({ message: "O campo 'password' deve ter pelo menos 6 caracteres" });
  }

  const  update  = await updateId(id, firstName, lastName, email, password);
  
  if (!update)
  return res.status(404).json({
    error: true,
    message: 'Usuário não encontrado',
  });

  return res.status(201).json({
    id,
    firstName,
    lastName,
    email,
  });
};

module.exports = putUserId;
