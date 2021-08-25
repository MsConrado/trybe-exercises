const assert = require('assert');

function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// // implemente seus testes aqui
// // 1
const resultado1 = sum(4, 5);
assert.strictEqual(resultado1, 9, '4 + 5 = 9');
// // assert.strictEqual(sum(4, 5), 9);

// // 2
const resultado2 = sum(0, 0);
assert.strictEqual(resultado2, 0, '0 + 0 = 0');
// // assert.strictEqual(sum(0, 0), 0);

// // 3
const resultado3 = sum(4, '5');
// assert.strictEqual(resultado3, 9, '4 + 5 = 9');


