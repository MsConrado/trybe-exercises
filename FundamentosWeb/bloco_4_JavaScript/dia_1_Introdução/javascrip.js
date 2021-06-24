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
// let anguloA = -10;
// let anguloB = 90;
// let anguloC = 80;

// let somaAngulo = anguloA + anguloB + anguloC;

// let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0

// if(angulosPositivos){
//   if(somaAngulo === 180){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log('ERRO')
// }

// Exercício 6

// let peçaXadrez = 'rei'

// switch(peçaXadrez.toLowerCase()){
//   case 'rei':
//     console.log('horizontal, vertical ou diagonal');
//     break;
//   case 'rainha':
//     console.log('linha reta nas fileiras, colunas e diagonais');
//     break;
//   case 'torre':
//     console.log('linha reta nas colunas e fileiras');
//     break;
//   case 'peao':
//     console.log('uma casa pra frente');
//     break;
//   case 'bispo':
//     console.log('linhas retas nas diagonais');
//     break;
//   case 'cavalo':
//     console.log('formato de um L');
//     break;
//   default:
//     console.log('ERRO');
// }

// Exercício 7

// let porcentagem = 50;

// if(porcentagem > 100 || porcentagem < 0){
//   console.log('ERRO')
// } else if (porcentagem >= 90){
//   console.log('A');
// } else if(porcentagem >= 80){
//   console.log('B');
// }else if(porcentagem >= 70){
//   console.log('C');
// }else if(porcentagem >= 60){
//   console.log('D');
// }else if(porcentagem >= 50){
//   console.log('E');
// }else{
//   console.log('F');
// }

// Exercício 8

// let a = 1;
// let b = 4;
// let c = 11;
 
// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//   console.log('Tem pelo menos um nuemro par')
// } else {
//   console.log('Nenhum par entre os tres')
// }

// Exercício 9

// let a = 10;
// let b = 4;
// let c = 11;
 
// if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1){
//   console.log(true)
// } else {
//   console.log(false)
// }

// Exercício 10

// let compra = 1;
// let venda = 3;

// if(compra >= 0 && venda >= 0){
//   let impostoCompra = compra * 0.2;
//   let valorTotalCompra = impostoCompra + compra;
//   let lucroVenda = venda - valorTotalCompra;
//   console.log('A empresa vai ter ' + lucroVenda * 1000 + ' de lucro.')
// } else {
//   console.log('ERRO');
// }

//Exercício 11
let salarioInss
let impostoRenda

let salarioBruto = 5000;

if(salarioBruto <= 1556.94){
  salarioInss = salarioBruto * 0.08;
} else if(salarioBruto <= 2594.92){
  salarioInss = salarioBruto * 0.09;
} else if(salarioBruto <= 5189.82){
  salarioInss = salarioBruto * 0.11
} else{
  salarioInss = 570.88
}

let baseSalario = salarioBruto - salarioInss;

if(baseSalario <= 1903.98){
  impostoRenda = baseSalario;

} else if(baseSalario <= 2826.65){
  impostoRenda = (baseSalario * 0.075) - 142.80;
} else if(baseSalario <= 3751.05){
  impostoRenda = (baseSalario * 0.15) - 354.80;
} else if(baseSalario <= 466468){
  impostoRenda = (baseSalario * 0.225)- 636.13;
} else{
  impostoRenda = (baseSalario * 0.275)- 869.36;
}
let salarioLiquido = baseSalario - impostoRenda;
console.log(salarioLiquido)
