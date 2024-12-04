"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="bg-yellow-300 h-full p-4 flex flex-col items-center text-center gap-4">
      <img src="/pikachu.png" alt="pikachu" />
      <h1>Find all your favorite Pokemon</h1>
      <h2>
        You can know the type of Pokemon, its strengths, and disadvantages and
        abilities
      </h2>
      <Button
        onClick={() => router.push("/pokedex")}
        variant={"default"}
        className="bg-green-400 w-full"
      >
        See all pokemons
      </Button>
    </div>
  );
};

export default HomePage;
