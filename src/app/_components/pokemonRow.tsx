import { PokemonData } from "~/types";

type Data = {
  data: PokemonData;
};

export const PokemonRow = ({ data }: Data) => {
  const { id, name, sprite, types } = data;
  return (
    <div className="grid grid-cols-2 place-items-center gap-4 border-2 sm:grid-cols-3 lg:grid-cols-4">
      <div>{id}</div>
      <div>{name}</div>
      <div>
        {types.map((type, i) => (
          <span key={i}>
            {type}
            <br />
          </span>
        ))}
      </div>
      <div>
        <img
          src={sprite}
          width={100}
          height={100}
          alt="Picture of the author"
          className="self-center"
        />
      </div>
    </div>
  );
};
