 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 
// for(let todos of numbers){
//   console.log(todos);
// }

// 2

let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
  
}
console.log(soma);