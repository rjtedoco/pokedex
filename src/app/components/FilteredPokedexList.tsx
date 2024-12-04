"use client";

import { useCallback, useEffect, useState } from "react";
import MultiSelect from "./multi-select";
import PokedexList from "./pokedex/PokedexList";

interface FilteredPokedexListProps {
  query: string;
  currentPage: number;
}

type PokemonType = {
  value: string;
  label: string;
};

const FilteredPokedexList = ({
  query,
  currentPage,
}: FilteredPokedexListProps) => {
  const [selectedTypes, setSelectedTypes] = useState<PokemonType[]>([]);

  const handleSelect = (type: PokemonType) => {
    setSelectedTypes((prev) => [...prev, type]);
  };

  const handleUnselect = useCallback((type: PokemonType) => {
    setSelectedTypes((prev) => prev.filter((s) => s.value !== type.value));
  }, []);

  const types = selectedTypes.map((type) => type.value);

  useEffect(() => {
    console.log(selectedTypes);
  }, [selectedTypes]);
  return (
    <div>
      <MultiSelect
        selectedTypes={selectedTypes}
        handleSelect={handleSelect}
        handleUnselect={handleUnselect}
      />
      <PokedexList query={query} currentPage={currentPage} types={types} />
    </div>
  );
};

export default FilteredPokedexList;
