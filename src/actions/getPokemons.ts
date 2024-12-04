"use server";

import { PokemonResponse } from "@/types/Pokemon";

const getPokemons = async (limit: number): Promise<PokemonResponse[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  const data = (await response.json()).results as PokemonResponse[];

  return data;
};

export default getPokemons;
