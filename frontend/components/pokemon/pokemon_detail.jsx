import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    let id = this.props.match.params.pokemonId;
    this.props.fetchPokemon(id);
  }

  componentWillReceiveProps(newProps) {
    debugger
    let prevId = this.props.match.params.pokemonId;
    let newId = newProps.match.params.pokemonId;

    if (prevId !== newId) {
      this.props.fetchPokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    let poke = this.props.poke;

    if (poke) {
    let moves = poke.moves

    return(
      <section>
        <p>
          <img src={poke.image_url}/>
          <br />
          <span>{poke.name}</span>
          <br />
          <span>{poke.attack}</span>
          <br />
          <span>{poke.defense}</span>
          <br />
          <span>Moves: {moves}</span>
        </p>
      </section>
    );
  } else {
    return null;
  }
  }

}

export default PokemonDetail;
