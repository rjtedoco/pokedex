"use client";

import { useCallback, useEffect, useState } from "react";
import MultiSelect from "../ui/multi-select";
import PokedexList from "./PokedexList";
import Search from "./Search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSelect = (type: PokemonType) => {
    setSelectedTypes((prev) => [...prev, type]);

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const handleUnselect = useCallback((type: PokemonType) => {
    setSelectedTypes((prev) => prev.filter((s) => s.value !== type.value));
  }, []);

  const clearSelectedTypes = () => {
    setSelectedTypes([]);
  };

  const types = selectedTypes.map((type) => type.value);

  return (
    <>
      <Search onSearch={clearSelectedTypes} />
      <MultiSelect
        selectedTypes={selectedTypes}
        handleSelect={handleSelect}
        handleUnselect={handleUnselect}
      />
      <PokedexList query={query} currentPage={currentPage} types={types} />
    </>
  );
};

export default FilteredPokedexList;
