const func = (num) => {
  if(typeof num === 'string') return 'o valor deve ser um número'
  if (num > 0) return "positivo";
  if (num < 0) return "negativo";
  return "neutro";
};

module.exports = func;
