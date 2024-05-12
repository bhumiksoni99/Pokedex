import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokemonRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      message: "Hi",
    };
  }),
  addPokemon: publicProcedure
    .input(z.object({ name: z.string().min(1), sprite: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { name, sprite } = input;

      const lowerCase = name.toLowerCase();
      const query = capitalize(lowerCase);
      return ctx.db.pokemon.create({
        data: {
          name: query,
          sprite,
        },
      });
    }),
  updatePokemon: publicProcedure.mutation(async ({ ctx }) => {
    return ctx.db.pokemon.update({
      where: {
        id: 10,
      },
      data: {
        types: ["grass"],
      },
    });
  }),
  fetchPokemon: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { name } = input;

      const lowerCase = name.toLowerCase();
      const query = capitalize(lowerCase);
      return ctx.db.pokemon.findUnique({
        where: {
          name: query,
        },
      });
    }),
  fetchMultiple: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { name } = input;

      let array = name.split(",");
      array = array.map((item: string) =>
        capitalize(item.trim().toLowerCase()),
      );

      return ctx.db.pokemon.findMany({
        where: {
          name: { in: array },
        },
      });
    }),
  fetchAll: publicProcedure.mutation(async ({ ctx }) => {
    return ctx.db.pokemon.findMany();
  }),
});

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}
