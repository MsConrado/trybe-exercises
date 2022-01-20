const connection = require('./connection');

const insertUser = async (firstName, lastName, email, password) => {
  const [user] = await connection.execute(
    'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
  return user;
};

const selectUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  if (!users) return null;

  return users;
};

const selectId = async (id) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );

  if (!user) return null;

  return user;
};

const updateId = async (id, firstName, lastName, email, password) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE users SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );

  if (!affectedRows) return null;

  return affectedRows;
};

module.exports = {
  insertUser,
  selectUsers,
  selectId,
  updateId,
};
