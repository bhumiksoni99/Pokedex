import { Pokemon } from "../_components/pokemon";

export default async function Home() {
  // const hello1 = await api.post.hello({ text: "from tRPC" });
  // const hello = await api.pokemon.hello();
  // console.log("saj", hello);
  // console.log("ass", hello1);

  return (
    <main>
      <Pokemon />
    </main>
  );
}
