import { PokemonData, Type, types } from "~/types";
import { PokemonRow } from "./pokemonRow";
import { Select, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { PokedexTable } from "./pokedexTable";

type Data = {
  data: PokemonData[];
};

export function FilterablePokdexTable({ data }: Data) {
  const [allPokemons, setAllPokemons] = useState(data);
  const [selected, setSeletced] = useState(" ");
  const handleChange = (e: SelectChangeEvent) => {
    setSeletced(e.target.value);
    const filtered = data.filter((pokemon) =>
      pokemon.types.includes(e.target.value),
    );
    setAllPokemons(filtered);
  };
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-between">
          <p>Filter By Type</p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Type"
            className="ml-10"
            value={selected}
            onChange={handleChange}
          >
            {types.map((type, i) => (
              <MenuItem key={i} value={type}>
                {type.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              setAllPokemons(data);
              setSeletced("");
            }}
          >
            Clear Filters
          </Button>
        </div>
      </div>
      {allPokemons.length > 0 && (
        <PokedexTable data={allPokemons} key={allPokemons} />
      )}
    </div>
  );
}
