"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex items-center w-full flex-shrink-0 md:max-w-[500px]">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <SearchIcon className="absolute ml-3 pointer-events-none h-4 w-4 text-gray-500 peer-focus:text-gray-900" />
      <Input
        type="text"
        placeholder="Search a pokemon name..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search") || ""}
        className="pl-8"
      />
    </div>
  );
}
