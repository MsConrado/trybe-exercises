const readline = require("readline-sync");

const sorteio = () => {

    const numero = readline.questionInt('Escolha um numero de 0 a 10: ');

    const sort = parseInt(Math.random() * 10)

    console.log(`Seu número foi o ${numero}`);


    if (sort === numero) {
        console.log("Parabéns, número correto!");
    } else {
        console.log(`Opa, não foi dessa vez. O número era ${sort}`);
    }

    const jogar = readline.question('Gostaria de jogar novamente? [s/n]');

    if(jogar !== 's') {
        return
    } else {
        sorteio()
    }

}

sorteio()

module.exports = sorteio;
