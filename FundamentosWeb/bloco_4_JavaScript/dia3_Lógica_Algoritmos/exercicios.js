// 1 
// let estrela = '* '
// let espaco = ''
// for(let index = 0; index < 5; index += 1){
//   espaco += estrela;
// }
// for(let index = 0; index < 5; index += 1){
//   console.log(espaco)
// }

// 2

// let estrela = '* '
// let espaco = ''
// for(let index = 0; index < 5; index += 1){
//   espaco += estrela;
//   console.log(espaco)
// }

// 3 

// let n = 5
// let estrela = '*'
// let espaco = ' '
// let vazio = ''
// let posisao = n
// for(let linha = 0; linha < n; linha += 1){
//   for( let coluna = 0; coluna < n; coluna += 1){
//     if(coluna < posisao){
//       vazio += espaco
//     } else {
//       vazio += estrela
//     }
//   } 
//   console.log(vazio);
//   vazio = '';
//   posisao -= 1;
// }

// let n = 5;
// let asterisco = '*';
// let espaco = ' ';
// let conteudoLinha = '';

// for(let linha = 1; linha <= n; linha += 1){
//   for(let colunaLinha = 1; colunaLinha <= (n - linha); colunaLinha += 1){
//     conteudoLinha += espaco;
//   }
//   for(let colunaAsterisco = n; colunaAsterisco > (n - linha); colunaAsterisco -= 1){
//     conteudoLinha += asterisco;
//   }
//   console.log(conteudoLinha);
//   conteudoLinha = '';
// }

// let n = 5;
// let asterisco = '*';
// let espaco = ' ';
// let conteudoLinha = '';

// for(let linha = 1; linha <= n; linha += 1){
//   for(let colunaLinha = 1; colunaLinha <= (n - linha); colunaLinha += 1){
//     conteudoLinha += espaco;
//   }
//   for(let colunaAsterisco = 1; colunaAsterisco <= linha; colunaAsterisco += 1){
//     conteudoLinha += asterisco;
//   }
//   console.log(conteudoLinha);
//   conteudoLinha = '';
// }

// let n = 5;
// let asterisco = '*';
// let espaco = ' ';

// for(let linha = 1; linha <= n; linha += 1){
//   let conteudoLinha = '';
//   for(let colunaLinha = 1; colunaLinha <= (n - linha); colunaLinha += 1){
//     conteudoLinha += espaco;
//   }
//   for(let colunaAsterisco = 1; colunaAsterisco <= linha; colunaAsterisco += 1){
//     conteudoLinha += asterisco;
//   }
//   console.log(conteudoLinha);
// }

// 4

// let n = 5
// let estrela = ' *'
// let espaco = ' '
// let vazio = ''
// let posisao = n
// for(let linha = 0; linha < n; linha += 1){
//   for( let coluna = 0; coluna < n; coluna += 1){
//     if(coluna < posisao){
//       vazio += espaco
//     } else {
//       vazio += estrela
//     }
//   } 
//   console.log(vazio);
//   vazio = '';
//   posisao -= 1;
// }

// Bonus

let numero = 4
let guardar = 0
for(let contador = 1; contador <= numero; contador += 1){
  if ((numero % contador) === 0){
    guardar += 1;  
    }
}
if(guardar === 2){
  console.log('Numero primo!');   
} else{
  console.log('Numero NÃO é primo!');
}

 