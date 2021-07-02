let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let infos = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}
// // 1

// console.log('Bem vinda, ' + info.personagem + '.');

// // 2

info['recorrente'] = 'Sim'
// console.log(info);

// // 3

// for (let chave in info) {
//   console.log(chave);
// }

// // 4

// for (let chave in info) {
//   console.log(info[chave]);
// }

// 5

for( let chave in info, infos){
  if (info[chave] === infos[chave]) {
    console.log('Ambos ' + chave + 's');
  } else {
    console.log(info[chave] + ' e ' + infos[chave]);
  }
}
