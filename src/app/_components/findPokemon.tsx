"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { api } from "~/trpc/react";
import { Pokemon } from "./pokemon";
import { PokemonRow } from "./pokemonRow";

export function FindPokemon() {
  const [name, setName] = useState("");

  const fetchPokemon = api.pokemon.fetchPokemon.useMutation({
    onSuccess: () => {
      setName("");
    },
  });

  return (
    <div className="min-h-screen items-center px-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // createPost.mutate({ name });
          fetchPokemon.mutate({ name });
        }}
        className="mt-20 flex flex-1 flex-row"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          value={name}
          variant="outlined"
          className="mr-5 flex-1"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Search Pokemon
        </Button>
      </form>
      {fetchPokemon.data && <PokemonRow data={fetchPokemon.data} />}
    </div>
  );
}
