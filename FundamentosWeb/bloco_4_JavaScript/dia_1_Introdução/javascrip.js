// // Exercício 1
// let a = 5;
// let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Exercício 2
// const a = 20;
// const b = 15;

// if(a > b){
//   console.log('a maior');
// } else {
//   console.log('b maior');
// }

// Exercício 3
// const a = 40;
// const b = 50;
// const c = 30;

// if(a > b && a > c){
//   console.log('a é maior');
// } else if (b > a && b > c){
//   console.log('b é maior');
// } else{
//   console.log('c é maior');
// }

// Exercício 4
// let valor = 10;

// if(valor > 0){
//   console.log('positivo');
// } else if (valor < 0){
//   console.log('negativo');
// } else {
//   console.log('zero')
// }

// Exercício 5
let anguloA = -10;
let anguloB = 90;
let anguloC = 80;

let somaAngulo = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0

if(angulosPositivos){
  if(somaAngulo === 180){
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('ERRO')
}