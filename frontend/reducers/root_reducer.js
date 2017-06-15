import { combineReducers } from 'redux';
import pokemon from "./pokemon_reducer";

const rootReducer = combineReducers({
  pokemon
});

export default rootReducer;
