import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () =>  {
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  ReactDOM.render(<h1>Pokedex</h1>, document.getElementById('root'));
});
