const { myFizzBuzz } = require("./script");

describe("Requisitos 4 questões 1 ao 4", () => {
  it("1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  })
  it("2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(6)).toBe("fizz");
  });
  it("3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });
  it("4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it("5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz('2')).toBe(false);
  });
});
