import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PokemonDetail from "./components/pokemon/PokemonDetail";
import PokemonList from "./components/pokemon/PokemonList";
import Home from "./components/Home";
import Test from "./components/pokemon/Test";



const router = createBrowserRouter([
    {
        path :"/",
        element : <Home />,
    },    
            
    {
        path:"/details/:id",
        element : <PokemonDetail />
    },
    {
        path:"/test",
        element: <Test/>
    }
        
    
    
])

export default router