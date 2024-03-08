import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './components/pokemon/pokemonSlice'




const store = configureStore({
  reducer: {
    pokemon: pokemonSlice
  }
})

export default store