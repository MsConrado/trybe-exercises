// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const funcao = require('./script');

  test('exercicio 1', () => {
    funcao.num = jest.fn()
    .mockReturnValue(10)
    expect(funcao.num()).toBe(10)
    expect(funcao.num).toHaveBeenCalled();
    expect(funcao.num).toHaveBeenCalledTimes(1);
  });