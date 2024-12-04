import fetchPokemons from "@/actions/fetchPokemons";
import PokedexItem from "./PokedexItem";

interface PokedexListProps {
  query: string;
  currentPage: number;
}
const PokedexList = async ({ query, currentPage }: PokedexListProps) => {
  const paginatedPokemons = await fetchPokemons({
    query: query,
    currentPage: currentPage,
  });
  return (
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {paginatedPokemons.map((pokemon) => (
        <PokedexItem key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokedexList;
