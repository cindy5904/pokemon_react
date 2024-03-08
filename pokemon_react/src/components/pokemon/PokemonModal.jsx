// ModalPokedex.js
import React from 'react';
import { useSelector } from 'react-redux';

const ModalPokedex = ({ onClose }) => {
  const pokedex = useSelector((state) => state.pokemon.pokedex);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Pokedex</h2>
        <ul>
          {pokedex.map((pokemon) => (
            <li key={pokemon.id}>
              <img src={pokemon.sprites?.other?.dream_world?.front_default} alt={`Pokemon ${pokemon.name}`} />
              <p>Name: {pokemon.name}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalPokedex;
