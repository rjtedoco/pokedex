"use client";
import fetchPokemon from "@/actions/fetchPokemon";
import { Badge } from "@/components/ui/badge";
import { getTypeColor, toTitleCase } from "@/lib/utils";
import Image from "next/image";
import useSWR from "swr";

interface PokedexItemProps {
  name: string;
}

const PokedexItem = ({ name }: PokedexItemProps) => {
  // const pokemon: PokemonDetails = await fetchPokemon(name);
  const {
    data: pokemon,
    isLoading,
    error,
  } = useSWR(["api/pokemon", name], async () => fetchPokemon(name));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className="bg-slate-900 flex-1  rounded-lg p-2 items-center flex flex-col">
      <h2 className="text-white">{toTitleCase(pokemon.name)}</h2>
      <Image
        src={pokemon.imageUrl}
        alt={pokemon.name}
        width={112}
        height={112}
      />
      <div className="flex gap-2">
        {pokemon.types.map(({ type }) => (
          <Badge key={type.name} className={getTypeColor(type.name)}>
            {type.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PokedexItem;
