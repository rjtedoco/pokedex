"use server";

import { PokemonResponse } from "@/types/Pokemon";

interface FetchPokemonProps {
  query?: string;
  types?: string[];
  currentPage: number;
  limit?: number;
}

const fetchPokemons = async ({
  query,
  types,
  currentPage,
  limit = 12,
}: FetchPokemonProps): Promise<PokemonResponse[]> => {
  try {
    if (query) {
      // Fetch Pokémon by name or ID
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
    } else if (types && types.length > 0) {
      // Fetch Pokémon by types
      const typePromises = types.map(async (type) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`
        );

        if (!response.ok) {
          throw new Error(`Type ${type} not found`);
        }

        const data = await response.json();
        return data.pokemon.map((p: any) => p.pokemon);
      });

      // Get lists of Pokémon for each type
      const typePokemonLists = await Promise.all(typePromises);

      // Find intersection of all type lists
      const intersection = typePokemonLists.reduce((acc, list) => {
        return acc.filter((pokemon: any) =>
          list.some((p: any) => p.name === pokemon.name)
        );
      });

      // Implement pagination
      const offset = (currentPage - 1) * limit;
      const paginatedPokemons = intersection.slice(offset, offset + limit);

      return paginatedPokemons;
    } else {
      // Fetch paginated Pokémon list
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
