import { PokemonDetails } from "@/types/Pokemon";

const fetchPokemon = async (name: string): Promise<PokemonDetails> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return {
    name: data.name,
    imageUrl: data.sprites.other["official-artwork"].front_default,
    types: data.types,
  };
};

export default fetchPokemon;
