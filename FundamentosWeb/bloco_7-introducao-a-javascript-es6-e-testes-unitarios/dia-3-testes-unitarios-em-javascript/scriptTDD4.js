const assert = require('assert')

const greetPeople = (people) => {
  let final = []
  for (const person in people) {
    let greeting = 'Hello ';
    final.push(greeting + people[person]);
  }
  return final;
};

assert.strictEqual(typeof greetPeople, 'function');
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const funcao = greetPeople(parameter);

assert.deepStrictEqual(funcao, result)


