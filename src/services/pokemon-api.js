import axios from 'axios';

const fetchPokemon = async name => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};

const api = {
  fetchPokemon,
};

export default api;
