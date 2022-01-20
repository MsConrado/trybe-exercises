const { selectUsers } = require('../models/user');

const getUser = async (_req, res) => {
  const users = await selectUsers();

  if (!users) return res.status(200).json([]);

  return res.status(200).json(users);
};

module.exports = getUser;
