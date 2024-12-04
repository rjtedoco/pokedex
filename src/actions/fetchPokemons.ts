"use server";

import { PokemonResponse } from "@/types/Pokemon";

interface FetchPokemonProps {
  query?: string;
  currentPage: number;
  limit?: number;
}

const fetchPokemons = async ({
  query,
  currentPage,
  limit = 12,
}: FetchPokemonProps): Promise<PokemonResponse[]> => {
  try {
    console.log("query => ", query);
    if (query) {
      const removed = query.replace(/[^a-zA-Z]/g, "");
      console.log("removed => ", removed);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokémon not found");
      }

      const data = await response.json();

      return [
        {
          name: data.name,
          url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
        },
      ];
    } else {
      const offset = (currentPage - 1) * limit;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon");
      }

      const data = await response.json();

      return data.results as PokemonResponse[];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchPokemons;
