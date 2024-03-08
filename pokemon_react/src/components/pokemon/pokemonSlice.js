import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300');
    const pokemonDetails = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const detailsResponse = await axios.get(pokemon.url);
        return {
          id: detailsResponse.data.id, 
          name: pokemon.name,
          sprites: detailsResponse.data.sprites,
        };
      })
    );
    return pokemonDetails;
  } catch (error) {
    throw error;
  }
});

export const fetchPokemonDetail = createAsyncThunk('pokemon/fetchPokemonDetail', async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log('fetchPokemonDetail response:', response.data); 
    return response.data;
  } catch (error) {
    throw error;
  }
});
  
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
      pokemons: [],
      selectedPokemon: null, 
      pokedex: [], 
      pokedexCount: 0,
      sprites: {},
      baseExperience: null,
      abilities: [],
      types: [],
      hp: null,
      atk: null,
      def: null,
      spd: null,
      exp: null,
      error: null,
    },
    reducers: {
      setSelectedPokemon: (state, action) => {
        state.selectedPokemon = action.payload;
      },
      addPokemonToPokedex: (state, action) => {
        state.pokedex.push(action.payload);
        state.pokedexCount += 1;
      },
    },
    extraReducers: (builder) => {
      builder
        
        .addCase(fetchPokemons.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.pokemons = action.payload;
        })
        .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
          const pokemonData = action.payload;
          const existingPokemon = state.pokemons.find(pokemon => pokemon.id === pokemonData.id);
          console.log(pokemonData.stats);
          if (existingPokemon) {
            existingPokemon.id = pokemonData.id;
            existingPokemon.name = pokemonData.name;
            existingPokemon.sprites = pokemonData.sprites;
            existingPokemon.weight = pokemonData.weight;
            existingPokemon.height = pokemonData.height;
            existingPokemon.exp = pokemonData.base_experience;
            existingPokemon.abilities = pokemonData.abilities;
            existingPokemon.types = pokemonData.types;
            existingPokemon.hp = pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat;
            existingPokemon.atk = pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat;
            existingPokemon.def = pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat;
            existingPokemon.spd = pokemonData.stats.find(stat => stat.stat.name === 'speed').base_stat;
            existingPokemon.abilities = pokemonData.abilities.map(ability => ability.ability.name);
            existingPokemon.types = pokemonData.types.map(type => type.type.name);
           
          } else {
            state.pokemons.push({
              id: pokemonData.id,
              name: pokemonData.name,
              sprites: pokemonData.sprites,
              weight: pokemonData.weight,
              height: pokemonData.height,
              exp: pokemonData.base_experience,
              abilities: pokemonData.abilities,
              types: pokemonData.types,
              abilitiesname: pokemonData.abilities.map(ability => ability.ability.name),
              typesname: pokemonData.types.map(type => type.type.name),
              hp: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat,
              atk: pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat,
              def: pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat,
              spd: pokemonData.stats.find(stat => stat.stat.name === 'speed').base_stat,
               
            });
          }
        
          if (!state.selectedPokemon || state.selectedPokemon.id !== pokemonData.id) {
            state.selectedPokemon = {
              id: pokemonData.id,
              name: pokemonData.name,
              sprites: pokemonData.sprites,
              weight: pokemonData.weight,
              height: pokemonData.height,
              exp: pokemonData.base_experience,
              abilities: pokemonData.abilities,
              types: pokemonData.types,
              abilitiesname: pokemonData.abilities.map(ability => ability.ability.name),
              typesname: pokemonData.types.map(type => type.type.name),
              hp: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat,
              atk: pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat,
              def: pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat,
              spd: pokemonData.stats.find(stat => stat.stat.name === 'speed').base_stat,
            };
          }
        })
        
    },
  });

export const { setSelectedPokemon, addPokemonToPokedex } = pokemonSlice.actions;
export default pokemonSlice.reducer;