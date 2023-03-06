import { useState, useEffect, FormEvent } from 'react';
import {api} from '../lib/axios'

import { useNavigate } from 'react-router';



interface callPokeProps {
    id: number;
    name: string;
    url: string;
}



export function Transaction() {
    const navigate = useNavigate();

    const [callPoke, setCallPoke] = useState<callPokeProps[]>([])
    const [pokemon, setPokemon] = useState('');

    const getPoke = async () => {
      const response = await api.get('https://pokeapi.co/api/v2/pokemon/');
      const data = response.data;

       

      setCallPoke(data.results)
    };
    
    
    useEffect(() => {  
        getPoke();
    }, []);

   
 
    function handleClick(event: FormEvent) {
      event?.preventDefault();

        if({setPokemon}) {
            navigate('/showPokemon')
        } else {
            alert('Nam')
        }
          
    }

    return(
        <div >
            <form className="flex flex-col  gap-4">
            <div className="flex flex-1 gap-6 ">
            <input 
            type="text" 
            placeholder="Choose your Pokemon" 
            className="flex-grow border focus:outline-none focus:ring-2  focus:border-green-400 rounded-md text-black cursor-pointer p-3 "
            value={pokemon} 
            onChange={e => setPokemon(e.target.value)}
            />
             <button 
             className="flex flex-1 px-3 py-3 bg-green-300 items-center border rounded-md border-green-400 hover:bg-green-500"
             onClick={handleClick}
             >
                 clique
            </button>
            </div>
            <div className="flex border-2 border-double justify-center bg-gray-500 hover:bg-gray-600 border-green-400 rounded-md p-4 gap-2">
                <ul>
                    {callPoke.map((poke) => (
                        <li key={poke.name}>
                          {poke.name} 
                        </li>
                    ))}
                </ul>
            </div>
            </form >
         
        </div>
    );
}