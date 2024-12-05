import FilteredPokedexList from "../components/FilteredPokedexList";
import PaginationList from "../components/PaginationList";

const Pokedex = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(currentPage / 5) * 5;

  return (
    <div className="flex flex-col m-4 gap-4 items-center">
      <FilteredPokedexList query={query} currentPage={currentPage} />
      <PaginationList totalPages={totalPages} />
    </div>
  );
};

export default Pokedex;
