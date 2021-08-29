const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Verificando usuarios', () => {
  it('verficando se o usuario é encontrado', async () => {
    const usuario = await getUserName(1)
    expect(usuario).toBe('Mark')
  })

  expect.assertions(1);
  it('verifique se o usuario não é encontrado', async () => {
    try {
      await getUserName(3)
    } catch (error) {
      expect(error).toEqual(new Error('User with 3 not found.'))
    }
  })
})

describe('Verificando usuarios', () => {
  it('verifique se o usuario é encontrado', () => (
    getUserName(1).then((nome) => {
      expect(nome).toBe('Mark')
    })
  ))

  it('verifique se o usuario não é encontrado', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => (
      expect(error.message).toMatch('User with 3 not found.')
    ))
  })
})