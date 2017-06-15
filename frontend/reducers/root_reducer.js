import { combineReducers } from 'redux';
import pokemon from "./pokemon_reducer";
import items from "./items_reducer";

const rootReducer = combineReducers({
  pokemon,
  items,
});

export default rootReducer;
