const fs = require("fs");

const escreverArquivo = (nome, escrita) => {
  fs.writeFileSync(nome, escrita);

  return "ok";
};

module.exports = escreverArquivo;
