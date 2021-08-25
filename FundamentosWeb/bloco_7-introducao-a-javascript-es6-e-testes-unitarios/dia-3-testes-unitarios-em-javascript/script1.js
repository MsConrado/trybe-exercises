const assert = require("assert");

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemove, "function");

// 1
const myRemove1 = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(myRemove1, [1, 2, 4]);

// 2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3
const parametros = [5, 6, 7, 8];
myRemove(parametros, 5);
assert.deepStrictEqual(parametros, [5, 6, 7, 8]);

// 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
