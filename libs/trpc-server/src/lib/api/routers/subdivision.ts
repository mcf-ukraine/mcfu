import { getAllSubdivisions } from "../services";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const subdivisionRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const subdivisions = await getAllSubdivisions();

    return subdivisions;
  }),
});
