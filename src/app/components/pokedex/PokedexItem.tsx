import getPokemon from "@/actions/getPokemon";
import { Badge } from "@/components/ui/badge";
import { getTypeColor, toTitleCase } from "@/lib/utils";
import { PokemonDetails } from "@/types/Pokemon";
import Image from "next/image";

interface PokedexItemProps {
  name: string;
}

const PokedexItem = async ({ name }: PokedexItemProps) => {
  const pokemon: PokemonDetails = await getPokemon(name);

  return (
    <div className="bg-slate-900">
      <h2 className="text-white">{toTitleCase(pokemon.name)}</h2>
      <Image
        src={pokemon.imageUrl}
        alt={pokemon.name}
        width={150}
        height={150}
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
