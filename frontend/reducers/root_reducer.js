import { combineReducers } from 'redux';
import pokemonReducer from "./pokemon_reducer";

const rootReducer = combineReducers({
  pokemonReducer
});

export default rootReducer;
