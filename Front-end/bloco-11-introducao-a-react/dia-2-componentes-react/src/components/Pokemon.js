import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon
    return (
      <div className="pokemon">
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name} ></img>
      </div>
    )
  }
}

export default Pokemon;