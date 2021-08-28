const promise = () => {
  const minhaPromise = new Promise((resolve, reject) => {
    const array = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    )
    const soma = array.map((numero) => numero * numero).reduce((sum, numero) => sum + numero);

    (soma < 8000) ? resolve(soma) : reject();
    console.log(soma);
  })
  minhaPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((number, acc) => number + acc, 0))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
}
promise()