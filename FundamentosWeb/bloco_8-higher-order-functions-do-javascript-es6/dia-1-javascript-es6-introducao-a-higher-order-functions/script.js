// const acordar = () => 'Acordando!!';
// const cafe = () => 'Bora tomar café!!';
// const dormir = () => 'Partiu dormir!!';

// const doingThings = (func) => func()
// // Ao chamar a função doingThings:
// console.log(doingThings(acordar));
// console.log(doingThings(cafe));
// console.log(doingThings(dormir));
// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// // Acordando!!

// const contratados = (nomeCompleto) => {
//   const email = nomeCompleto.toLowerCase().split(' ').join('_');
//   return { nomeCompleto, email: `${email}@betrybe.com` }
// };
// const newEmployees = () => {
//   const employees = {
//     id1: contratados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: contratados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: contratados('Carla Paiva '), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(contratados));

// const sorteio = () => Math.floor(Math.random() * 5)
// const acertouErrou = (num) => {
//   const sorteado = sorteio();
//   if (sorteado === num) {
//     console.log('Parabéns você ganhou');
//   } else {
//     console.log('Tente novamente');
//   }
// }
// acertouErrou(2)

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const check = (gabarito, estudantes) => {
  let soma = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (estudantes[index] === "N.A") {
      soma += 0;
    } else if (estudantes[index] === gabarito[index]) {
      soma += 1;
    } else {
      soma -= 0.5;
    }
  }
  return soma;
};

const corretorAltomatico = (gabarito, estudantes, funcao) =>
  funcao(gabarito, estudantes);
console.log(corretorAltomatico(RIGHT_ANSWERS, STUDENT_ANSWERS, check));

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5 + 1);

  return callback(myNumber, number) ? "Lucky day, you won!" : "Try Again!";
};

console.log(lotteryResult(2, numberChecker));
