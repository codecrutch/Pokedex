import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

let defaultState = [];

const ItemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON:
      return [action.items];
    default:
      return state;
  }
};

export default ItemsReducer;
