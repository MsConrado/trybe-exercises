const readline = require("readline-sync");

const velocidade = () => {

    const distancia = readline.questionInt("Qual a distancia em metros? ");
    const tempo = readline.questionInt("Qual o tempo em segundos? ");

    console.log(`distancia: ${distancia}, tempo: ${tempo}`);

    const resultado = distancia / tempo

    console.log(`A velocidade media do carro é ${resultado}km/h `);
}

velocidade()

module.exports = velocidade;
