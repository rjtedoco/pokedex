"use client";
import fetchPokemons from "@/actions/fetchPokemons";
import PokedexItem from "./PokedexItem";
import useSWR from "swr";

interface PokedexListProps {
  query: string;
  currentPage: number;
  types: string[];
}

const PokedexList = ({ query, currentPage, types }: PokedexListProps) => {
  const { data, error, isLoading } = useSWR(
    ["api/pokemons", query, currentPage, types],
    () => fetchPokemons({ query, currentPage, types })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((pokemon) => (
        <PokedexItem key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokedexList;
