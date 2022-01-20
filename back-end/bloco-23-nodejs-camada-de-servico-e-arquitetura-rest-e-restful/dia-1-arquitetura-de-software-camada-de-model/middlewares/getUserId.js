const { selectId } = require('../models/user');

const getUserId = async (req, res) => {
  const { id } = req.params;

  const user = await selectId(id);

  if (!user)
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });

  return res.status(200).json(user);
};

module.exports = getUserId;
