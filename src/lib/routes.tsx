import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { ShowEvent } from '../pages/ShowEvent';
import { ShowPokemonAfterChoose } from '../pages/ShowPokemonAfterChoose';



export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShowEvent/>} />
                <Route  path="/showPokemon" element={<ShowPokemonAfterChoose />} />
            </Routes>
        </BrowserRouter>
    );
}