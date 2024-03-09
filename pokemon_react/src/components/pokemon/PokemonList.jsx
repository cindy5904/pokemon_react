import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from './pokemonSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';


const PokemonList = () => {
    const dispatch = useDispatch();
    const { pokemons, error } = useSelector((state) => state.pokemon);
    const itemsPerPage = 12; 
    const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    
      dispatch(fetchPokemons());
    
  }, [dispatch]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = pokemons.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const getAllPokemonTypes = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      return response.data.results.map((type) => type.name);
    } catch (error) {
      console.error('Error fetching Pokemon types:', error);
      throw error;
    }
  };
  
  
  getAllPokemonTypes()
    .then((types) => {
      console.log('All Pokemon Types:', types);
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   
    return ( 
        <>
        <div className="container-card">
           
        {currentPokemons.map((pokemon, index) => (
            
    <Link key={pokemon.id} to={`/details/${pokemon.id}`} className="pokemon-link">
      <div className="card-list" >
            <div className="card-contour-list" >
                <div className="pokemon-card">
        <div className="img-poke">
            <div className="contour-img-list">
            <img className="img" src={pokemon.sprites?.other?.dream_world?.front_default} alt={`Pokemon ${pokemon.name}`} />

            </div>
        </div>
        <div className="text-poke">
          <p className="pokemon-id">#{startIndex + index + 1}</p>
          <p className="pokemon-name">{pokemon.name}</p>
        </div>
      </div>
      </div>
        </div>
    </Link>

  ))}
    
            
      </div>

      
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>

        <span className="current-page">{currentPage}</span>

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
        </>
     );
}
 
export default PokemonList;