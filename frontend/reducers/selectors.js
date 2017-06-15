import { values } from 'lodash';

const selectAllPokemon = ({pokemon}) => {
  // return values(pokemon);
  // can use lodash or just vanilla javascript
  return Object.keys(pokemon).map( id => pokemon[id]);
};

export default selectAllPokemon;


//
// class PokemonList {
//   render() {
//     return (
//       <ul>
//         {
//           this.props.pokemon.map((poke) => {
//             return <li> poke.name </
//           })
//         }
//       </ul>
//     )
//   }
// }
//
//
// mapStateToProps(state) => {
//   return {
//     pokemon: selectAllPokemon(state.pokemon)
//   }
// }
