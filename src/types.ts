export interface PokemonData {
  name: string;
  id: number;
  sprite: string;
  types: Array<string>;
}

export enum Type {
  GRASS = "grass",
  FIRE = "fire",
  FLYING = "flying",
  BUG = "bug",
  WATER = "water",
  POISON = "poison",
  FAIRY = "fairy",
  ROCK = "rock",
  GROUND = "ground",
  ELECTRIC = "electric",
}

export const types = [
  "grass",
  "water",
  "fire",
  "electric",
  "rock",
  "ground",
  "fairy",
  "poison",
  "flying",
  "normal",
];
