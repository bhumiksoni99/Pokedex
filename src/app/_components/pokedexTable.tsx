"use client";

import { PokemonData, Type, types } from "~/types";
import { PokemonRow } from "./pokemonRow";
import { Select, Button } from "@mui/material";
import { useState } from "react";

type Data = {
  data: PokemonData[];
};

const PAGE_SIZE = 2;

export const PokedexTable = ({ data }: Data) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(PAGE_SIZE);
  return (
    <div>
      <div className="mt-10 font-bold">{data.length} results found!</div>
      <div className="mt-10">
        {data.length > 0 && (
          <div className="mb-4 mt-10 grid grid-cols-2 place-items-center gap-4 border-2 font-bold sm:grid-cols-3 lg:grid-cols-4">
            <div>ID</div>
            <div>Name</div>
            <div>Types</div>
            <div>Sprite</div>
          </div>
        )}
        {data.slice(start, end).map((pokemon) => (
          <PokemonRow data={pokemon} key={pokemon.id} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button
          variant="contained"
          onClick={() => {
            setStart(start - PAGE_SIZE);
            setEnd(start);
          }}
          className="mr-10"
          disabled={start <= 0}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setStart(end);
            setEnd(end + PAGE_SIZE);
          }}
          disabled={end >= data.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
