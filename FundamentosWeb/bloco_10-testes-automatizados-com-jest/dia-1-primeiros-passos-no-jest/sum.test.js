const { soma } = require('./script');

describe('Requisitos 1 questões 1 ao 4', () => {
  it('1 - soma de 4 + 5 é igual a 9', () => {
    expect(soma(4, 5)).toBe(9);
  })
  it('2 - soma de 0 + 0 é 0', () => {
    expect(soma(0, 0)).toBe(0);
  })
  it('3 - soma de 4 + "5" da um erro', () => {
    expect(() => { soma(4, '5') }).toThrow();
  })
  it('4 - soma de 4 + "5" da um erro', () => {
    expect(() => { soma(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  })
});
