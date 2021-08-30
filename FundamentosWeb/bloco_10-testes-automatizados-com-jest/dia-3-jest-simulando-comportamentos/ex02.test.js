const funcao = require('./script');

test('exercicio 2', () => {
  funcao.num = jest.fn().mockImplementationOnce((a, b) => a / b )
  expect(funcao.num(10, 2)).toBe(5);
  expect(funcao.num).toHaveBeenCalled();
  expect(funcao.num).toHaveBeenCalledWith(10, 2);
});