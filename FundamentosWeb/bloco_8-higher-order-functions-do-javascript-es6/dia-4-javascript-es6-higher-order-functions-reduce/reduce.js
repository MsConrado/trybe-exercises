// 1 - Dada uma matriz, transforme em um array.
const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  const matriz = arrays.reduce((contador, array) => {
    for (let index of array) {
      contador.push(index);
    }
    return contador;
    //     array.forEach((item)=> contador.push(item));
    // return contador;
  }, []);
  return matriz;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
