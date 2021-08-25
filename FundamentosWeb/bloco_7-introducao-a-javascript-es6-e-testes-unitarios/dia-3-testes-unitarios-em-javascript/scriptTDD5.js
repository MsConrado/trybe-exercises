const assert = require("assert");

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let soma = 0

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      soma += 1
      results.push(soma);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

assert.strictEqual(typeof removeVowels, 'function');
const parameter = 'Dayane';
const result = 'D1y2n3';
const funcao = removeVowels(parameter)
assert.strictEqual(funcao, result)