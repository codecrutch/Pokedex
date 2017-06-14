export const fetchAllPokemon = () => {
  return $.ajax({
    method: "get",
    url: "api/pokemon"
  });
};

window.fetchAllPokemon = fetchAllPokemon;
