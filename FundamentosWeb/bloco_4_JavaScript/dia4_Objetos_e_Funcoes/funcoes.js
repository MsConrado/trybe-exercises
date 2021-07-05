// 1

// function palindromo(nomes) {
//   let reverse = nomes.split('').reverse().join(',')
//   nomes = nomes.split('').join()
//   if (nomes === reverse){
//     return console.log(true);
  
//   } else {
//     return console.log(false);
//   }
// }
// palindromo('arara');

// 2

// function inteiros() {
//   let array = [152, 3, 20, 7, 100, 1];
//   let maior = 0
//   let resultado = 0
//   for(let index in array){
//     if (array[index] > maior) {
//       maior = array[index];
//       resultado = index
//     }
//   }return console.log(resultado);
// }
// inteiros();

// 3

// function inteiros() {
//   let array = [2, 4, -6, 7, 10, 0, -3];
//   let menor = 0
//   let resultado = 0
//   for(let index in array){
//     if (array[index] < menor) {
//       menor = array[index];
//       resultado = index
//     }
//   }return console.log(resultado);
// }
// inteiros();

// 4

// function nome() {
//   let maior = ''
//   let quantidade = 0
//   let nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
//   for(let index in nomes){
//     if(nomes[index].length > quantidade){
//       quantidade = nomes[index].length
//       maior = nomes[index]
//     }
//   }return console.log(maior);

// }
// nome();

// 5 

// function inteiro() {
//   let array = [3, 3, 2, 5, 8, 2, 3];
//   let numero = 0;
//   let repetido = 0;
//   let indexNumero = 0;

//   for(let index in array){
//     for(let index1 in array){
//       if(array[index] === array[index1]){
//         numero += 1
//       }
//     }
//     if(numero > repetido){
//       repetido = numero;
//       indexNumero = index;
//     }
//     numero = 0;
//   }
//   return console.log(array[indexNumero]);
// }

// inteiro();

// 6

// function numeroInteiro(N) {
//   let soma = 0
//   for(let index = 0; index <= N; index += 1){
//     soma += index
//   }
//   return console.log(soma);
// }
// numeroInteiro(10)

// 7

// function fimDaFrase(word, ending) {
//   word = word.split('');
//   ending = ending.split('');
//   
//   for(let index = o; index < ending.length; index +=1){

//    }
//  
// }

// fimDaFrase('Trybe', 'be')

// function verificaFimPalavra(palavra, fimPalavra) {
//   palavra = palavra.split('');
//   fimPalavra = fimPalavra.split('');
//   controle = true;
//   for (let index = 0; index < fimPalavra.length; index += 1) {
//     if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//       controle = false;
//     }
//   }
//   return controle;
// } console.log(verificaFimPalavra('trybe', 'be'));
// console.log(verificaFimPalavra('joaofernando', 'fernan'));