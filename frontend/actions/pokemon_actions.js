export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
});

export const receivePokemon = ({poke, items}) => ({
  type: RECEIVE_POKEMON,
  poke,
  items,
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon().then(
    pokemon => dispatch(receiveAllPokemon(pokemon))
  );
};

export const requestPokemon = (id) => (dispatch) => {
  return APIUtil.fetchPokemon(id).then(
    pokemon => dispatch(receivePokemon(pokemon))
  );
};
