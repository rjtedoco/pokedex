export interface PokemonDetails {
  name: string;
  imageUrl: string;
  types: PokemonType[];
}

export interface PokemonResponse {
  name: string;
  url: string;
}

export interface PokemonDetailsResponse {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
