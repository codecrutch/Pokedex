import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndex from './pokemon/pokemon_index_container';
import PokemonDetail from './pokemon/pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/" component={PokemonIndex} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
