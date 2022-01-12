const { expect } = require("chai");

const func = require("./func");

describe('O número é "positivo", "negativo" ou "neutro"', () => {
  it('O número é "positivo"', () => {
    const numero = func(2);
    expect(numero).to.be.equals("positivo");
  });
  it('O número é "negativo"', () => {
    const numero = func(-3);
    expect(numero).to.be.equals("negativo");
  });
  it('O número é "neutro"', () => {
    const numero = func(0);
    expect(numero).to.be.equals("neutro");
  });
});

describe("Somente numeros", () => {
  it("o parâmetro informado é um numero?", () => {
    const string = func("a");
    expect(string).to.be.equals("o valor deve ser um número");
  });
});

const fs = require("fs");
const sinon = require("sinon");
const escreverArquivo = require("./index");

describe("Executando a função escreverArquivo", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync");
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it("a resposta é igual a 'ok'", () => {
    const result = escreverArquivo("meu-arquivo.txt", "Conseguir!!!");

    expect(result).to.be.equals("ok");
  });
});
