let arrayN = [9, 1, 2, 3, 9, 5, 7];
let maior = 0;
for (let contador = 0; contador < arrayN.length; contador += 1){
  for(let contador1 = 0; contador1 < 1; contador +=1){
    if(arrayN[contador] >= arrayN[contador1]){
      maior = arrayN[contador1];
    }
  }
} console.log(maior);