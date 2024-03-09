// PokemonDetail.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonDetail, addPokemonToPokedex} from '../pokemon/pokemonSlice';
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import  '../../css/fire.css';
import fire from '../../assets/images/fire-type.png';
import grass from '../../assets/images/grass-type.png';
import colorless from '../../assets/images/colorless-type.png';
import dragon from '../../assets/images/dragon-type.png';
import dark from '../../assets/images/dark-type.png';
import electric from '../../assets/images/electric-type.png';
import metal from '../../assets/images/metal-type.png';
import water from '../../assets/images/water-type.png';
import fairy from '../../assets/images/fairy-type.png';
import psychic from '../../assets/images/psychic-type.png';
const maxHP = 300;
const maxATK = 300;
const maxDEF = 300;
const maxSPD = 300;
const maxEXP = 1000;

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const { id } = useParams();
  
    useEffect(() => {
        console.log('id:', id);
    console.log('selectedPokemon:', selectedPokemon);

        if (id && (!selectedPokemon || id !== selectedPokemon.id)) {
          dispatch(fetchPokemonDetail(id));
        }
      }, [dispatch, id, selectedPokemon]);
    

      const pokemonTypes = selectedPokemon ? selectedPokemon.types : [];
      console.log('pokemonTypes:', pokemonTypes)

      const getLogoPath = (typeObj) => {
        const typeName = typeObj.type.name;
        // console.log('Type Name:', typeName);
        // console.log('Type Object:', typeObj.type);
      
        if (typeName === 'fire') {
            return fire;
          } else if (typeName === 'dragon') {
            return dragon;
          } else if (typeName === 'fairy') {
            return fairy;
          } else if (typeName === 'dark') {
            return dark;
          } else if (typeName === 'colorless') {
            return colorless;
          } else if (typeName === 'grass') {
            return grass;
          } else if (typeName === 'metal') {
            return metal;
          } else if (typeName === 'psychic') {
            return psychic;
          } else if (typeName === 'water') {
            return water;
          } else if (typeName === 'electric') {
            return electric;
          } else {
            console.error("Aucun type de ce nom, retourne l'image par défaut");
            return psychic;
          }
        
    
      };
      const typeObj = selectedPokemon ? selectedPokemon.types : [];
      console.log('mon type obj',typeObj)
      const getStylePath = (typeObj) => {
        if (typeObj && typeObj.length > 0) {
          const typeName = typeObj[0].type.name; 
          console.log('Type Name style:', typeName);
          console.log('Type Object style:', typeObj);
      
          if (typeName === 'fire') {
            import('../../css/fire.css')
              .then(() => {
                console.log('CSS chargé avec succès');
                this.forceUpdate();
              })
              .catch((error) => console.error('Erreur lors du chargement du CSS:', error));
            
            return 'fire'; 
          }
        }
      
        return null;
      };
    
        const classe = getStylePath(typeObj);
      
  const handleAddToPokedex = () => {
    dispatch(addPokemonToPokedex());
  };

  if (!selectedPokemon) {
    return null; 
  }
  
  const hpPercentage = (selectedPokemon.hp / maxHP) * 100;
  const atkPercentage = (selectedPokemon.atk / maxATK) * 100;
  const defPercentage = (selectedPokemon.def / maxDEF) * 100;
  const spdPercentage = (selectedPokemon.spd / maxSPD) * 100;
  const expPercentage = (selectedPokemon.exp / maxEXP) * 100;
  console.log('Speed:', selectedPokemon.spd);
  console.log('Max Speed:', maxSPD);
  return (
    
    <div>
        <Navbar/>
      <div className="container-card-detail">
        <div className="card-detail">
            <div className={`${classe}-card-contour`}>
            <div className="top-card-detail">

                <p className='name-detail'>{selectedPokemon.name}</p>
               <div className="detail-droite">
               <p><span className='pv'>PV:</span><span className='hp'>{selectedPokemon.hp}</span></p>
                {pokemonTypes.map((typeObj, index) => (
                    <img
                        key={index}
                        src={getLogoPath(typeObj)}
                        alt={typeObj.type.name}
                        className='energy'
                    />
                    ))}
               </div>
                
                </div>
               <div className="cont-img">
                <div className="img-centre">
                    <img className="img-detail" src={selectedPokemon.sprites?.other?.dream_world?.front_default} alt={`Pokemon ${selectedPokemon.name}`} />
                    </div>
               </div>
               <div className="type-abilities">
               <div className="type">
                    <p className='text-type'>{selectedPokemon.typesname.join(', ')}</p>
               </div>
               <div className="abilities">
                 <p className="text-abilities">{selectedPokemon.abilitiesname.join(', ')}</p>
               </div>
               </div>
               <div className="taille-poid-detail">
                    <div className="taille">
                        <p className='text-tp'>Height:</p>
                        <p>{selectedPokemon.height}</p>
                    </div>
                    <div className="poid">
                        <p className='text-tp'>Weight:</p>
                        <p>{selectedPokemon.weight}</p>
                    </div>
                    
               </div>
               <div>
                <p className='text-bar'>HP: </p>
                <div className="stat-bar hp-bar" style={{ width: `${hpPercentage}%`}}></div>
              </div>
              
              <div>
                <p className='text-bar'>ATK: </p>
                <div className="stat-bar atk-bar" style={{ width: `${atkPercentage}%` }}></div>
              </div>
              <div>
                <p className='text-bar'>DEF: </p>
                <div className="stat-bar def-bar" style={{ width: `${defPercentage}%` }}></div>
              </div>
              <div>
                <p className='text-bar'>SPD: </p>
                <div className="stat-bar spd-bar" style={{ width: `${spdPercentage}%` }}></div>
              </div>
              <div>
                <p className='text-bar'>EXP: </p>
                <div className="stat-bar exp-bar" style={{ width: `${expPercentage}%` }}></div>
              </div>
             
            </div>
        </div>
        <button onClick={handleAddToPokedex}>Add to Pokedex</button>
      </div>
    </div>
  );
};

export default PokemonDetail;
