import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from "lodash";
import selectAllPokemon from './selectors';

let defaultState = { entities: {}, currentPoke: 0};

const pokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      let newPokemonState = merge({}, state);
      newPokemonState.entities = action.pokemon;

      return newPokemonState;
    case RECEIVE_POKEMON:
      let newPokeState = merge({}, state, {entities: { [action.poke.id]: action.poke}});
      newPokeState.currentPoke = action.poke.id;
      return newPokeState;
    default:
      return state;
  }
};

export default pokemonReducer;
