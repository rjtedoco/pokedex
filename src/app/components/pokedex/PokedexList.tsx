import getPokemons from "@/actions/getPokemons";
import PokedexItem from "./PokedexItem";

const PokedexList = async () => {
  const pokemons = await getPokemons(5);
  return (
    <div className="flex flex-col gap-4">
      {pokemons.map((pokemon) => (
        <PokedexItem key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokedexList;
