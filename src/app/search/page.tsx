"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { api } from "~/trpc/react";
import { FilterablePokdexTable } from "../_components/filterablePokedexTable";

export default function Home() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPokemon = api.pokemon.fetchMultiple.useMutation({
    onSuccess: () => {
      setName("");
      setLoading(false);
    },
  });

  // const fetchAll = api.pokemon.fetchAll.useMutation({
  //   onSuccess: () => {
  //     setName("");
  //     setLoading(false);
  //   },
  // });

  return (
    <div className="min-h-screen items-center px-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          fetchPokemon.mutate({ name });
        }}
        className="mt-20 flex flex-1 flex-row"
      >
        <TextField
          id="outlined-basic"
          label="Enter comma separeted names to search mulitple pokemon"
          value={name}
          variant="outlined"
          className="mr-5 flex-1"
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" type="submit" disabled={name.length === 0}>
          Search Pokemon
        </Button>
      </form>
      {/* <Button
        variant="contained"
        className="mt-10"
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          fetchAll.mutate();
        }}
      >
        Fetch Entire Pokedex
      </Button> */}
      {loading && (
        <span className="flex min-h-screen flex-1 items-center justify-center">
          Loading...
        </span>
      )}
      {fetchPokemon.data && <FilterablePokdexTable data={fetchPokemon.data} />}
    </div>
  );
}
