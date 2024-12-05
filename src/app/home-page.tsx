"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <main
      className="
        h-screen
        flex
        items-center
        justify-center
        bg-[url('/bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div
        className="
          mb-16
          flex
          flex-col
          items-center
          justify-center
          text-center
          gap-4
          bg-slate-900/30 p-8 rounded-xl
          mx-4
        "
      >
        <h1 className="text-4xl font-bold text-white">
          Find all your favorite Pokémon
        </h1>
        <h2 className="text-lg text-gray-50">
          Discover Pokémon types, their strengths and weaknesses, and their
          abilities.
        </h2>
        <Button
          onClick={() => router.push("/pokedex")}
          variant="default"
          className="bg-green-500 hover:bg-green-400 transition-colors duration-300 px-6 py-2 rounded"
        >
          See All Pokémons
        </Button>
      </div>
    </main>
  );
};

export default HomePage;
