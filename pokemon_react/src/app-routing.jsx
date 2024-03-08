import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PokemonDetail from "./components/pokemon/PokemonDetail";
import PokemonList from "./components/pokemon/PokemonList";
import Home from "./components/Home";



const router = createBrowserRouter([
    {
        path :"/",
        element : <Home />,
    },    
            
    {
        path:"/details/:id",
        element : <PokemonDetail />
    }
        
    
    
])

export default router