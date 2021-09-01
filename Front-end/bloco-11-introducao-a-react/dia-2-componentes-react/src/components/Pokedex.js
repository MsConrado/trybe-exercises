import React from 'react';
import pokemonLista from '../data'
import Pokemon from '../components/Pokemon'

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        {pokemonLista.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}


export default Pokedex;