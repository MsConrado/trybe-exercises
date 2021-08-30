const funcao = require('./script');

test('exercicio 3', () => {
  funcao.num = jest.fn().mockImplementation((a, b, c) => (a * b) * c)
  expect(funcao.num(2, 1, 2)).toBe(4);
  expect(funcao.num).toHaveBeenCalled();
  expect(funcao.num).toHaveBeenCalledWith(2, 1, 2);
  funcao.num.mockReset()
  funcao.num = jest.fn().mockImplementation((a) => a * 2)
  expect(funcao.num(2)).toBe(4);
  expect(funcao.num).toHaveBeenCalled();
  expect(funcao.num).toHaveBeenCalledWith(2);
});