import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitleCase(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export const getTypeColor = (type: string): string => {
  const typeColorMap: { [key: string]: string } = {
    normal: "bg-gray-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-500",
    ice: "bg-blue-200",
    fighting: "bg-orange-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-700",
    flying: "bg-indigo-300",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-gray-700",
    ghost: "bg-indigo-700",
    dark: "bg-black",
    dragon: "bg-purple-700",
    steel: "bg-gray-400",
    fairy: "bg-pink-300",
  };

  return typeColorMap[type.toLowerCase()] || "bg-white";
};
