import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from './pokemonSlice';
import { fetchPokemonDetail, addPokemonToPokedex} from '../pokemon/pokemonSlice';

import { Link } from 'react-router-dom';
import axios from 'axios';
import  '../../css/fire.css';


const Test = () => {
    const dispatch = useDispatch();
    const { pokemons, error } = useSelector((state) => state.pokemon);
    const itemsPerPage = 12; 
    const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

    const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    
      dispatch(fetchPokemons());
    
  }, [dispatch]);
  const pokemonTypes = selectedPokemon ? selectedPokemon.types : [];


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = pokemons.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
//   const getTypeClasses = (type) => {
//     switch (type) {
//       case 'normal':
//         return {
//           link: 'normal-link',
//           cardList: 'normal-card-list',
//           cardContourList: 'normal-card-contour-list',
//           pokemonCard: 'normal-pokemon-card',
//           imgPoke: 'normal-img-poke',
//           contourImgList: 'normal-contour-img-list',
//           textPoke: 'normal-text-poke',
//           imgClass: 'normal-img',
//           idClass: 'normal-pokemon-id',
//           nameClass: 'normal-pokemon-name',
//         };
//       case 'fighting':
//         return {
//           link: 'fighting-link',
//           cardList: 'fighting-card-list',
//           cardContourList: 'fighting-card-contour-list',
//           pokemonCard: 'fighting-pokemon-card',
//           imgPoke: 'fighting-img-poke',
//           contourImgList: 'fighting-contour-img-list',
//           textPoke: 'fighting-text-poke',
//           imgClass: 'fighting-img',
//           idClass: 'fighting-pokemon-id',
//           nameClass: 'fighting-pokemon-name',
//         };
//       case 'flying':
//         return {
//           link: 'flying-link',
//           cardList: 'flying-card-list',
//           cardContourList: 'flying-card-contour-list',
//           pokemonCard: 'flying-pokemon-card',
//           imgPoke: 'flying-img-poke',
//           contourImgList: 'flying-contour-img-list',
//           textPoke: 'flying-text-poke',
//           imgClass: 'flying-img',
//           idClass: 'flying-pokemon-id',
//           nameClass: 'flying-pokemon-name',
//         };
//       case 'poison':
//         return {
//           link: 'poison-link',
//           cardList: 'poison-card-list',
//           cardContourList: 'poison-card-contour-list',
//           pokemonCard: 'poison-pokemon-card',
//           imgPoke: 'poison-img-poke',
//           contourImgList: 'poison-contour-img-list',
//           textPoke: 'poison-text-poke',
//           imgClass: 'poison-img',
//           idClass: 'poison-pokemon-id',
//           nameClass: 'poison-pokemon-name',
//         };
//       case 'ground':
//         return {
//           link: 'ground-link',
//           cardList: 'ground-card-list',
//           cardContourList: 'ground-card-contour-list',
//           pokemonCard: 'ground-pokemon-card',
//           imgPoke: 'ground-img-poke',
//           contourImgList: 'ground-contour-img-list',
//           textPoke: 'ground-text-poke',
//           imgClass: 'ground-img',
//           idClass: 'ground-pokemon-id',
//           nameClass: 'ground-pokemon-name',
//         };
//       case 'rock':
//         return {
//           link: 'rock-link',
//           cardList: 'rock-card-list',
//           cardContourList: 'rock-card-contour-list',
//           pokemonCard: 'rock-pokemon-card',
//           imgPoke: 'rock-img-poke',
//           contourImgList: 'rock-contour-img-list',
//           textPoke: 'rock-text-poke',
//           imgClass: 'rock-img',
//           idClass: 'rock-pokemon-id',
//           nameClass: 'rock-pokemon-name',
//         };
//       case 'bug':
//         return {
//           link: 'bug-link',
//           cardList: 'bug-card-list',
//           cardContourList: 'bug-card-contour-list',
//           pokemonCard: 'bug-pokemon-card',
//           imgPoke: 'bug-img-poke',
//           contourImgList: 'bug-contour-img-list',
//           textPoke: 'bug-text-poke',
//           imgClass: 'bug-img',
//           idClass: 'bug-pokemon-id',
//           nameClass: 'bug-pokemon-name',
//         };
//       case 'ghost':
//         return {
//           link: 'ghost-link',
//           cardList: 'ghost-card-list',
//           cardContourList: 'ghost-card-contour-list',
//           pokemonCard: 'ghost-pokemon-card',
//           imgPoke: 'ghost-img-poke',
//           contourImgList: 'ghost-contour-img-list',
//           textPoke: 'ghost-text-poke',
//           imgClass: 'ghost-img',
//           idClass: 'ghost-pokemon-id',
//           nameClass: 'ghost-pokemon-name',
//         };
//       case 'steel':
//         return {
//           link: 'steel-link',
//           cardList: 'steel-card-list',
//           cardContourList: 'steel-card-contour-list',
//           pokemonCard: 'steel-pokemon-card',
//           imgPoke: 'steel-img-poke',
//           contourImgList: 'steel-contour-img-list',
//           textPoke: 'steel-text-poke',
//           imgClass: 'steel-img',
//           idClass: 'steel-pokemon-id',
//           nameClass: 'steel-pokemon-name',
//         };
//       case 'fire':
//         return {
//           link: 'fire-link',
//           cardList: 'fire-card-list',
//           cardContourList: 'fire-card-contour-list',
//           pokemonCard: 'fire-pokemon-card',
//           imgPoke: 'fire-img-poke',
//           contourImgList: 'fire-contour-img-list',
//           textPoke: 'fire-text-poke',
//           imgClass: 'fire-img',
//           idClass: 'fire-pokemon-id',
//           nameClass: 'fire-pokemon-name',
//         };
//       case 'water':
//         return {
//           link: 'water-link',
//           cardList: 'water-card-list',
//           cardContourList: 'water-card-contour-list',
//           pokemonCard: 'water-pokemon-card',
//           imgPoke: 'water-img-poke',
//           contourImgList: 'water-contour-img-list',
//           textPoke: 'water-text-poke',
//           imgClass: 'water-img',
//           idClass: 'water-pokemon-id',
//           nameClass: 'water-pokemon-name',
//         };
//       case 'grass':
//         return {
//           link: 'grass-link',
//           cardList: 'grass-card-list',
//           cardContourList: 'grass-card-contour-list',
//           pokemonCard: 'grass-pokemon-card',
//           imgPoke: 'grass-img-poke',
//           contourImgList: 'grass-contour-img-list',
//           textPoke: 'grass-text-poke',
//           imgClass: 'grass-img',
//           idClass: 'grass-pokemon-id',
//           nameClass: 'grass-pokemon-name',
//         };
//       case 'electric':
//         return {
//           link: 'electric-link',
//           cardList: 'electric-card-list',
//           cardContourList: 'electric-card-contour-list',
//           pokemonCard: 'electric-pokemon-card',
//           imgPoke: 'electric-img-poke',
//           contourImgList: 'electric-contour-img-list',
//           textPoke: 'electric-text-poke',
//           imgClass: 'electric-img',
//           idClass: 'electric-pokemon-id',
//           nameClass: 'electric-pokemon-name',
//         };
//       case 'psychic':
//         return {
//           link: 'psychic-link',
//           cardList: 'psychic-card-list',
//           cardContourList: 'psychic-card-contour-list',
//           pokemonCard: 'psychic-pokemon-card',
//           imgPoke: 'psychic-img-poke',
//           contourImgList: 'psychic-contour-img-list',
//           textPoke: 'psychic-text-poke',
//           imgClass: 'psychic-img',
//           idClass: 'psychic-pokemon-id',
//           nameClass: 'psychic-pokemon-name',
//         };
//       case 'ice':
//         return {
//           link: 'ice-link',
//           cardList: 'ice-card-list',
//           cardContourList: 'ice-card-contour-list',
//           pokemonCard: 'ice-pokemon-card',
//           imgPoke: 'ice-img-poke',
//           contourImgList: 'ice-contour-img-list',
//           textPoke: 'ice-text-poke',
//           imgClass: 'ice-img',
//           idClass: 'ice-pokemon-id',
//           nameClass: 'ice-pokemon-name',
//         };
//       case 'dragon':
//         return {
//           link: 'dragon-link',
//           cardList: 'dragon-card-list',
//           cardContourList: 'dragon-card-contour-list',
//           pokemonCard: 'dragon-pokemon-card',
//           imgPoke: 'dragon-img-poke',
//           contourImgList: 'dragon-contour-img-list',
//           textPoke: 'dragon-text-poke',
//           imgClass: 'dragon-img',
//           idClass: 'dragon-pokemon-id',
//           nameClass: 'dragon-pokemon-name',
//         };
//       case 'dark':
//         return {
//           link: 'dark-link',
//           cardList: 'dark-card-list',
//           cardContourList: 'dark-card-contour-list',
//           pokemonCard: 'dark-pokemon-card',
//           imgPoke: 'dark-img-poke',
//           contourImgList: 'dark-contour-img-list',
//           textPoke: 'dark-text-poke',
//           imgClass: 'dark-img',
//           idClass: 'dark-pokemon-id',
//           nameClass: 'dark-pokemon-name',
//         };
//       case 'fairy':
//         return {
//           link: 'fairy-link',
//           cardList: 'fairy-card-list',
//           cardContourList: 'fairy-card-contour-list',
//           pokemonCard: 'fairy-pokemon-card',
//           imgPoke: 'fairy-img-poke',
//           contourImgList: 'fairy-contour-img-list',
//           textPoke: 'fairy-text-poke',
//           imgClass: 'fairy-img',
//           idClass: 'fairy-pokemon-id',
//           nameClass: 'fairy-pokemon-name',
//         };
//       case 'unknown':
//         return {
//           link: 'unknown-link',
//           cardList: 'unknown-card-list',
//           cardContourList: 'unknown-card-contour-list',
//           pokemonCard: 'unknown-pokemon-card',
//           imgPoke: 'unknown-img-poke',
//           contourImgList: 'unknown-contour-img-list',
//           textPoke: 'unknown-text-poke',
//           imgClass: 'unknown-img',
//           idClass: 'unknown-pokemon-id',
//           nameClass: 'unknown-pokemon-name',
//         };
//       case 'shadow':
//         return {
//           link: 'shadow-link',
//           cardList: 'shadow-card-list',
//           cardContourList: 'shadow-card-contour-list',
//           pokemonCard: 'shadow-pokemon-card',
//           imgPoke: 'shadow-img-poke',
//           contourImgList: 'shadow-contour-img-list',
//           textPoke: 'shadow-text-poke',
//           imgClass: 'shadow-img',
//           idClass: 'shadow-pokemon-id',
//           nameClass: 'shadow-pokemon-name',
//         };
//       default:
//         return {
//           link: 'generic-link',
//           cardList: 'generic-card-list',
//           cardContourList: 'generic-card-contour-list',
//           pokemonCard: 'generic-pokemon-card',
//           imgPoke: 'generic-img-poke',
//           contourImgList: 'generic-contour-img-list',
//           textPoke: 'generic-text-poke',
//           imgClass: 'generic-img',
//           idClass: 'generic-pokemon-id',
//           nameClass: 'generic-pokemon-name',
//         };
//     }
//   };
  
const getStylePath = (typeObj) => {
    if (typeObj && typeObj.type) {
      const typeName = typeObj.type.name;
      console.log('Type Name:', typeName);

      if (typeName === 'fire') {
        return require('../../css/fire.css'); 
      }
    }

    
    return null;
  };
    const classe = getStylePath(typeObj)
    return ( 
        <>
        <div className="container-card">
           
           {currentPokemons.map(( pokemon, index) => (
               
       <Link key={pokemon.id} to={`/details/${pokemon.id}`} className="pokemon-link">
         <div className="card-list" >
               <div className="card-contour-list" >
                   <div className={`${classe}-pokemon-card`}>
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
 
export default Test;