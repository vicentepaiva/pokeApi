import pokemonLogo from '../assets/pokemon.png';


export function Header() {
    return (
        <header className="flex w-full  justify-center">
            <img src={pokemonLogo} alt="logo" />
        </header>
       
    );
}