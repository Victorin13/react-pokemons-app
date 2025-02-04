import { useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";

const usePokemon = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
    useEffect(() => {
      setPokemons(POKEMONS);
    }, []);

    return pokemons;
}

export default usePokemon;