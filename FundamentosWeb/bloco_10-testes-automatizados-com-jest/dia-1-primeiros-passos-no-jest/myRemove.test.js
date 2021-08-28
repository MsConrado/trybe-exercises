const { myRemove } = require('./script');

describe('Requisitos 2 questões 1 ao 4', () => {
  it('1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const retorno = [ 1, 2, 4 ]
    const funcao = myRemove([1, 2, 3, 4], 3)
    expect(funcao).toEqual(retorno);
  })
  it('2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    const parametro = [5, 4, 3, 2]
    myRemove(parametro, 5)
    expect(parametro).toEqual([5, 4, 3, 2]);
  })
  it('4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});