import title from '../assets/images/Monpokedex.png'
import PokemonList from './pokemon/PokemonList';
import Navbar from './shared/Navbar';
const Home = () => {
    return ( 
        <>
        <Navbar/>
         <div>
            <h1><img src={title} alt="titre" width={400} /></h1>
         </div>
         <PokemonList/>
        </>
     );
}
 
export default Home;