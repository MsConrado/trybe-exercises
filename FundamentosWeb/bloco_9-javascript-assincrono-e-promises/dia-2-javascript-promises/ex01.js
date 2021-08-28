// apiScript.js
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const object = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const piada = document.querySelector('#jokeContainer')
  fetch(API_URL, object)
    .then(response => response.json())
    .then((data) => piada.innerHTML = data.joke);
};


window.onload = () => fetchJoke();