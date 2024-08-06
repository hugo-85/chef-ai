"use server";

import { streamObject } from "ai";
import { createStreamableValue } from "ai/rsc";
import { PartialRecipe, recipeSchema } from "./schema";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export async function generateRecipes(prompt: string, apiKey: string) {
  const recipesStream = createStreamableValue<PartialRecipe>();

  if (!apiKey || apiKey === "") return;

  if (!prompt || prompt === "") return;

  const google = createGoogleGenerativeAI({
    apiKey: apiKey,
  });

  try {
    streamObject({
      model: google("models/gemini-1.5-flash"),
      prompt,
      schema: recipeSchema,
      maxTokens: 1000,
      system:
        "You are a helpful chef that creates recipes with quite detail steps.",
    })
      .then(async ({ partialObjectStream, warnings }) => {
        if (warnings && warnings.length > 0) {
          if (warnings[0]?.type) {
            recipesStream.error(
              // @ts-ignore
              `${warnings[0].type} - ${warnings[0]?.setting}`
            );
          } else recipesStream.error(warnings[0]);
        }

        for await (const partialObject of partialObjectStream) {
          recipesStream.update(partialObject);
        }
      })
      .catch((e) => {
        recipesStream.error(
          e?.message || "There was an error during the generation."
        );
      })
      .finally(() => {
        recipesStream.done();
      });

    return recipesStream.value;
  } catch (e: any) {
    recipesStream.error(
      e?.message || "There was an error during the generation."
    );
  }
}

export async function generateImage(prompt: string) {}
