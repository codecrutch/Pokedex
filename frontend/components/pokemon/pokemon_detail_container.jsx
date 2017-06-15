import React from 'react';
import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  return ({
    items: state.items,
    poke: state.pokemon.entities[state.pokemon.currentPoke]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPokemon: (id) => dispatch(requestPokemon(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
