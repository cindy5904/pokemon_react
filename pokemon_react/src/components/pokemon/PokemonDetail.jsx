import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPokemonDetail,
  addPokemonToPokedex,
} from "../pokemon/pokemonSlice";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import "../../css/typeClass.css";
import fire from "../../assets/images/fire-type.png";
import grass from "../../assets/images/grass-type.png";
import colorless from "../../assets/images/colorless-type.png";
import dragon from "../../assets/images/dragon-type.png";
import dark from "../../assets/images/dark-type.png";
import electric from "../../assets/images/electric-type.png";
import metal from "../../assets/images/metal-type.png";
import water from "../../assets/images/water-type.png";
import fairy from "../../assets/images/fairy-type.png";
import psychic from "../../assets/images/psychic-type.png";
import bug from "../../assets/images/bug-type2.png";
import flying from "../../assets/images/flying-type.webp";
import ghost from "../../assets/images/ghost-type.webp";
import ground from "../../assets/images/ground-type.png";
import ice from "../../assets/images/ice-type.png";
import poison from "../../assets/images/poison-type.png";
import rock from "../../assets/images/rock-type.png";
import steel from "../../assets/images/steel-type.png";
import fighting from "../../assets/images/fighting-type.png";
import unknown from "../../assets/images/unknown.png";
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
    console.log("id:", id);
    console.log("selectedPokemon:", selectedPokemon);

    if (id && (!selectedPokemon || id !== selectedPokemon.id)) {
      dispatch(fetchPokemonDetail(id));
    }
  }, [dispatch, id, selectedPokemon]);

  const pokemonTypes = selectedPokemon ? selectedPokemon.types : [];
  console.log("pokemonTypes:", pokemonTypes);

  const getLogoPath = (typeObj) => {
    const typeName = typeObj.type.name;
    // console.log('Type Name:', typeName);
    // console.log('Type Object:', typeObj.type);

    if (typeName === "fire") {
      return fire;
    } else if (typeName === "dragon") {
      return dragon;
    } else if (typeName === "fairy") {
      return fairy;
    } else if (typeName === "dark") {
      return dark;
    } else if (typeName === "colorless") {
      return colorless;
    } else if (typeName === "grass") {
      return grass;
    } else if (typeName === "metal") {
      return metal;
    } else if (typeName === "psychic") {
      return psychic;
    } else if (typeName === "water") {
      return water;
    } else if (typeName === "electric") {
      return electric;
    } else if (typeName === "bug") {
      return bug;
    } else if (typeName === "flying") {
      return flying;
    } else if (typeName === "ghost") {
      return ghost;
    } else if (typeName === "ice") {
      return ice;
    } else if (typeName === "ground") {
      return ground;
    } else if (typeName === "poison") {
      return poison;
    } else if (typeName === "rock") {
      return rock;
    } else if (typeName === "steel") {
      return steel;
    } else if (typeName === "normal") {
      return flying;
    } else if (typeName === "fighting") {
        return fighting;
    } else {
      console.error("Aucun type de ce nom, retourne l'image par défaut");
      return unknown;
    }
  };
  const typeObj = selectedPokemon ? selectedPokemon.types : [];
  console.log("mon type obj", typeObj);
  const getStylePath = (typeObj) => {
    if (typeObj && typeObj.length > 0) {
      const typeName = typeObj[0].type.name;
      console.log("Type Name style:", typeName);
      console.log("Type Object style:", typeObj);

      if (typeName === "fire") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log('CSS "fire" chargé avec succès');
          })
          .catch((error) =>
            console.error('Erreur lors du chargement du CSS "fire":', error)
          );

        return "fire";
      } else if (typeName === "grass") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log('CSS "grass" chargé avec succès');
          })
          .catch((error) =>
            console.error('Erreur lors du chargement du CSS "grass":', error)
          );

        return "grass";
      } else if (typeName === "water") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );

        return "water";
      } else if (typeName === "bug") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );

        return "bug";
      } else if (typeName === "flying") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );

        return "flying";
      } else if (typeName === "normal") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );

        return "normal";
      } else if (typeName === "poison") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );

        return "poison";
      } else if (typeName === "electric") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );

        return "electric";
      } else if (typeName === "ground") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "ground";

      } else if (typeName === "fairy") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "fairy";

      }  else if (typeName === "fighting") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "fighting";

      } else if (typeName === "psychic") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "psychic";

      } else if (typeName === "rock") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "rock";
        
      } else if (typeName === "ghost") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "ghost";
        
      } else if (typeName === "ice") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "ice";
        
      } else if (typeName === "dragon") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "dragon";
        
      }  else if (typeName === "dark") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "dark";
      }   else if (typeName === "steel") {
        import ("../../css/typeClass.css")
          .then(() => {
            console.log("CSS  chargé avec succès");
          })
          .catch((error) =>
            console.error("Erreur lors du chargement du CSS :", error)
          );
        return "steel";
      }
      return null;
    }
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
  console.log("Speed:", selectedPokemon.spd);
  console.log("Max Speed:", maxSPD);
  return (
    <div>
      <Navbar />
      <div className="container-card-detail">
        <div className={`${classe}-card-detail`}>
          <div className={`${classe}-card-contour`}>
            <div className="top-card-detail">
              <p className={`${classe}-name-detail`}>{selectedPokemon.name}</p>
              <div className="detail-droite">
                <p>
                  <span className="pv">PV:</span>
                  <span className="hp">{selectedPokemon.hp}</span>
                </p>
                {pokemonTypes.map((typeObj, index) => (
                  <img
                    key={index}
                    src={getLogoPath(typeObj)}
                    alt={typeObj.type.name}
                    className="energy"
                  />
                ))}
              </div>
            </div>
            <div className={`${classe}-cont-img`}>
              <div className={`${classe}-img-centre`}>
                <img
                  className="img-detail"
                  src={
                    selectedPokemon.sprites?.other?.dream_world?.front_default
                  }
                  alt={`Pokemon ${selectedPokemon.name}`}
                />
              </div>
            </div>
            <div className="type-abilities">
              <div className="gauche-info">
                <div className="type">
                  {pokemonTypes.map((typeObj, index) => (
                    <div key={index} className="type-item">
                      <img
                        src={getLogoPath(typeObj)}
                        alt={typeObj.type.name}
                        className="energy"
                      />
                      <p className={`${classe}-text-type`}>
                        {typeObj.type.name}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="taille-poid-detail">
                  <div className="taille">
                    <p className="text-tp">Height:</p>
                    <p>{selectedPokemon.height}</p>
                  </div>
                  <div className="poid">
                    <p className="text-tp">Weight:</p>
                    <p>{selectedPokemon.weight}</p>
                  </div>
                </div>
              </div>
              <div className={`${classe}-abilities`}>
                <p className={`${classe}-text-abilities`}>Abilities:</p>
                <hr />
                <ul>
                  {selectedPokemon.abilitiesname.map((ability, index) => (
                    <li key={index}>{ability}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="groupe">
              <div>
                <p className="text-bar">HP: </p>
                <div
                  className="stat-bar"
                  id={`${classe}-hp-bar`}
                  style={{ width: `${hpPercentage}%` }}
                ></div>
              </div>

              <div>
                <p className="text-bar">ATK: </p>
                <div
                  className="stat-bar"
                  id={`${classe}-atk-bar`}
                  style={{ width: `${atkPercentage}%` }}
                ></div>
              </div>
              <div>
                <p className="text-bar">DEF: </p>
                <div
                  className="stat-bar"
                  id={`${classe}-def-bar`}
                  style={{ width: `${defPercentage}%` }}
                ></div>
              </div>
              <div>
                <p className="text-bar">SPD: </p>
                <div
                  className="stat-bar"
                  id={`${classe}-spd-bar`}
                  style={{ width: `${spdPercentage}%` }}
                ></div>
              </div>
              <div>
                <p className="text-bar">EXP: </p>
                <div
                  className="stat-bar"
                  id={`${classe}-exp-bar`}
                  style={{ width: `${expPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleAddToPokedex}>Add to Pokedex</button>
      </div>
    </div>
  );
};

export default PokemonDetail;
