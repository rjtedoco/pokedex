import fetchPokemon from "@/actions/fetchPokemon";
import { Badge } from "@/components/ui/badge";
import { getTypeColor, toTitleCase } from "@/lib/utils";
import { PokemonDetails } from "@/types/Pokemon";
import Image from "next/image";

interface PokedexItemProps {
  name: string;
}

const PokedexItem = async ({ name }: PokedexItemProps) => {
  const pokemon: PokemonDetails = await fetchPokemon(name);

  return (
    <div className="bg-slate-900 flex-1  rounded-lg p-2 items-center flex flex-col">
      <h2 className="text-white">{toTitleCase(pokemon.name)}</h2>
      <Image
        src={pokemon.imageUrl}
        alt={pokemon.name}
        width={140}
        height={140}
        objectFit="cover"
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
