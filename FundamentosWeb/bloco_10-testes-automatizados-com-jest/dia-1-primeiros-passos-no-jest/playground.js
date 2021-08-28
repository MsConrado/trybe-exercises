function encode(string) {
  let trocaValor = '';
  for (let percorrer of string) {
    if (percorrer === 'a') {
      trocaValor += 1;
    } else if (percorrer === 'e') {
      trocaValor += 2;
    } else if (percorrer === 'i') {
      trocaValor += 3;
    } else if (percorrer === 'o') {
      trocaValor += 4;
    } else if (percorrer === 'u') {
      trocaValor += 5;
    } else {
      trocaValor += percorrer;
    }
  } return trocaValor;
}
function decode(string) {
  let trocaValor = '';
  for (let percorrer of string) {
    if (percorrer === '1') {
      trocaValor += 'a';
    } else if (percorrer === '2') {
      trocaValor += 'e';
    } else if (percorrer === '3') {
      trocaValor += 'i';
    } else if (percorrer === '4') {
      trocaValor += 'o';
    } else if (percorrer === '5') {
      trocaValor += 'u';
    } else {
      trocaValor += percorrer;
    }
  } return trocaValor;
}

function techList(techArray, name) {
  let vazio = [];
  let arrayObjeto = [];
  let techAprender = techArray.sort();
  for (let index of techAprender) {
    vazio = {
      tech: index,
      name: name,
    };
    arrayObjeto.push(vazio);
  }
  if (arrayObjeto.length === 0) {
    return ('Vazio!');
  } 
  return (arrayObjeto);
}

function hydrate(bebidas) {
  let numeros = bebidas.match(/\d/g);
  let somar = 0;
  for (let percorrer of numeros) {
    somar += parseInt(percorrer, 10);
  }
  if (somar !== 1) {
    return `${somar} copos de água`;
  }
  return `${somar} copo de água`;
}

module.exports = {
  techList,
  decode,
  encode,
  hydrate,
};
