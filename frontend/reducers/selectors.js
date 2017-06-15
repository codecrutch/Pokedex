import { values } from 'lodash';

const selectAllPokemon = ({pokemon: { entities }}) => {
  // return values(pokemon);
  // can use lodash or just vanilla javascript
  return Object.keys(entities).map( id => entities[id]);
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
