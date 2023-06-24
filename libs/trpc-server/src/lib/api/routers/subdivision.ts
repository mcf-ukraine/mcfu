import { createTRPCRouter, publicProcedure } from "../trpc";
import { getAllSubdivisions } from "../utils";

export const subdivisionRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const subdivisions = await getAllSubdivisions();

    return subdivisions;
  }),
});
