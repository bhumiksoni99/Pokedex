"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { api } from "~/trpc/react";

export function Pokemon() {
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");

  const addPokemonData = api.pokemon.addPokemon.useMutation({
    onSuccess: () => {
      setName("");
      setSprite("");
    },
  });

  const updatePokemon = api.pokemon.updatePokemon.useMutation({
    onSuccess: () => {
      setName("");
      setSprite("");
    },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-row">
        <TextField
          id="outlined-basic"
          label="Name"
          value={name}
          variant="outlined"
          className="mr-5"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Sprite"
          value={sprite}
          variant="outlined"
          onChange={(e) => setSprite(e.target.value)}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          // addPokemonData.mutate({ name, sprite });
          updatePokemon.mutate();
        }}
        className="mt-5 rounded border border-sky-500 p-4"
      >
        Send data
      </button>
    </div>
  );
}
