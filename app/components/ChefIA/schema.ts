import { DeepPartial } from "ai";
import { z } from "zod";

// define a schema for the recipes
export const recipeSchema = z.object({
  recipes: z.array(
    z.object({
      name: z.string().describe("Name of the recipe"),
      description: z.string().describe("a brief recipe description"),
      ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
      steps: z.array(z.string()),
      // image: z.string().describe("create an image that represents this meal"),
    })
  ),
});

// define a type for the partial recipes during generation
export type PartialRecipe = DeepPartial<typeof recipeSchema>;
