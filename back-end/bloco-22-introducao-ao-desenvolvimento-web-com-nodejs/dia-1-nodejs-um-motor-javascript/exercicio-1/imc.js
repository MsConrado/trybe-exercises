//  Exercicio 1 e 2

// const peso = 90;
// const altura = 175;

// const imc = (peso, altura) => {

//     console.log(`Peso: ${peso}, altura: ${altura}`);

//     const resultado = (peso / Math.pow(altura / 100, 2)).toFixed(2);

//     console.log(`O imc é ${resultado}`);
// };

// imc(peso, altura);
// ----------------------------------

// Exercicio 3

// const readline = require("readline-sync");

// const imc = () => {

//     const peso = readline.question("Qual seu peso? ");
//     const altura = readline.questionInt("Qual sua altura? ");

//     console.log(`Peso: ${peso}, altura: ${altura}`);

//     const resultado = (peso / Math.pow(altura / 100, 2)).toFixed(2);

//     console.log(`O imc é ${resultado}`);
// };

// imc();
// ---------------------------

// Exercicio 4

// const readline = require("readline-sync");

// const imc = () => {

//     const peso = readline.questionFloat("Qual seu peso? ");
//     const altura = readline.questionInt("Qual sua altura? ");

//     console.log(`Peso: ${peso}, altura: ${altura}`);

//     const resultado = (peso / Math.pow(altura / 100, 2)).toFixed(2);

//     console.log(`O imc é ${resultado}`);
// };

// imc();
// ---------------------------

// Exercicio 5

const readline = require("readline-sync");

const imc = () => {

    const peso = readline.questionFloat("Qual seu peso? ");
    const altura = readline.questionInt("Qual sua altura? ");

    console.log(`Peso: ${peso}, altura: ${altura}`);

    const resultado = (peso / Math.pow(altura / 100, 2)).toFixed(2);

    console.log(`O imc é ${resultado}`);

    if (resultado < 18.5) {
        console.log('Abaixo do peso (magreza)');
        return;
    }

    if (resultado >= 18.5 && resultado <= 25) {
        console.log('Peso normal');
        return;
    }

    if (resultado >= 25 && resultado <= 30) {
        console.log('Situação: Acima do peso (sobrepeso)');
        return;
    }

    if (resultado >= 30 && resultado <= 35) {
        console.log('Obesidade grau I');
        return;
    }

    if (resultado >= 35 && resultado <= 40) {
        console.log('Obesidade grau II');
        return;
    }

    if (resultado >= 40) {
        console.log('Obesidade graus III e IV');
        return;
    }
    
};

imc();

module.exports = imc;
