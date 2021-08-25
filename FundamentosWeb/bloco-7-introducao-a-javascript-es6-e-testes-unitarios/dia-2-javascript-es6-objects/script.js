// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const name = order.name;
//   const phoneNumber = order.phoneNumber;
//   const street = order.address.street;
//   const number = order.address.number;
//   const apartment = order.address.apartment;

//   console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}.`);
// }

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   let newDeliveryPerson = order.name;
//   newDeliveryPerson = 'Luiz Silva';
//   const pizzas = Object.keys(order.order.pizza);
//   const drinkType = order.order.drinks.coke.type;
//   let total = order.payment.total;
//   total = '50'
//   console.log(`Olá ${newDeliveryPerson}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinkType} é R$ ${total},00. `)
// }


// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (objeto, chave, valor) => objeto[chave] = valor;
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const chaves = (objeto) => Object.keys(objeto);
console.log(chaves(lesson2)); 

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObj = (objeto) => Object.entries(objeto).length;
console.log(tamanhoObj(lesson2));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listaValor = (objeto) => Object.values(objeto);
console.log(listaValor(lesson1));

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = {}
const todasAulas = (objeto) => {
  objeto.lesson1 = lesson1;
  objeto.lesson2 = lesson2;
  objeto.lesson3 = lesson3;
}
todasAulas(allLessons);
console.log(allLessons);

// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);


// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalEstudantes = (objeto) => {
  const lesson1 = objeto.lesson1.numeroEstudantes;
  const lesson2 = objeto.lesson2.numeroEstudantes;
  const lesson3 = objeto.lesson3.numeroEstudantes;
  console.log(`O Total de estudantes é ${lesson1 + lesson2 + lesson3}`);
} 
totalEstudantes(allLessons);

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const valorPosicao = (objeto, posisao) => {
  const objArray = Object.values(objeto);
  const posisaoObj = objArray[posisao];
  const resultado = posisaoObj[1];
  console.log(resultado);
} 
valorPosicao(lesson1, 0);

// const valorPosicao = (objeto, posisao) => Object.values(objeto)[posisao]; PEGUEI O VALOR DO OBJETO NA POSIÇÃO DIRETO
// console.log(valorPosicao(lesson1, 0))

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verificar = (objeto, chave, valor) => {
  console.log(Object.keys(objeto).includes(chave, valor));
}
verificar(lesson3, 'turno', 'noite');


const assert = require('assert');
assert.ok(1 == 1)