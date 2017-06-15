import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, requestPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () =>  {
  let store = configureStore();
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.requestPokemon = requestPokemon;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
