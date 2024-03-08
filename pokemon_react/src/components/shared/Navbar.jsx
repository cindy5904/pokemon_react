import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import ModalPokedex from "../pokemon/PokemonModal";
import { useState } from "react";
import modalLogo from "../../assets/images/modalLogo.png";

const Navbar = () => {
  const pokedexCount = useSelector((state) => state.pokemon.pokedexCount);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="section-gauche">
          <div className="logo">
            <img src={logo} alt="Logo" width={50} />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Pokémons</a>
            </li>
          </ul>
        </div>
        <div className="section-droite">
          <div className="pokedex-count">
            <img src={modalLogo} alt="logo pokedex" width={40}/>
            <span>{pokedexCount}</span>
          </div>
          <button onClick={handleOpenModal}>Open Pokedex</button>
          {isModalOpen && <ModalPokedex onClose={handleCloseModal} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
