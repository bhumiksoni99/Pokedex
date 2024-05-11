import Link from "next/link";
import { useState } from "react";
import { FindPokemon } from "./_components/findPokemon";
import { Pokemon } from "./_components/pokemon";

export default async function Home() {
  // const hello1 = await api.post.hello({ text: "from tRPC" });
  // const hello = await api.pokemon.hello();
  // console.log("saj", hello);
  // console.log("ass", hello1);

  return (
    <main className="p-10">
      <p>Welcome to Pokedex</p>
      <FindPokemon />
    </main>
  );
}
