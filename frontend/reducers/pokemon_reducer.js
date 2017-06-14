import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from "lodash";

let defaultState = {pokemon: {}};

const pokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      let newState = merge( {}, state);
      newState.pokemon = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
