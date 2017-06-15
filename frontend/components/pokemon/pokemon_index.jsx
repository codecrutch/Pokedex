import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetail from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let allPokemon = this.props.pokemon
    .map( poke => <PokemonIndexItem poke={poke} key={poke.id} />);

    return(
    <div>
      <Route path="/pokemon/:pokemonId" component={PokemonDetail}/>
      <ul>
        {allPokemon}
      </ul>
    </div>
    );
  }
}

export default PokemonIndex;
