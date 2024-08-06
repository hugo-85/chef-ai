"use server";

import { google } from "@ai-sdk/google";
import { createOpenAI, openai } from "@ai-sdk/openai";
import { generateObject, streamObject, streamText } from "ai";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";

export async function generateCompletion(prompt: string) {
  "use server";

  if (!process.env.PERPLEXITY_API_KEY)
    throw new Error(
      "PERPLEXITY_API_KEY environment variable is required. You can get it in https://www.perplexity.ai/settings/api"
    );

  const perplexity = createOpenAI({
    apiKey: process.env.PERPLEXITY_API_KEY ?? "",
    baseURL: "https://api.perplexity.ai/",
  });

  // const result = await streamText({
  //   model: perplexity("llama-3-sonar-large-32k-online"),
  //   maxTokens: 1000,
  //   frequencyPenalty: 1,
  //   prompt,
  // });

  // return createStreamableValue(result.textStream).value;

  const stream = createStreamableValue();

  // return await streamObject({
  //   model: perplexity("llama-3-sonar-large-32k-online"),
  //   schema: z.object({
  //     recipes: z.array(
  //       z.object({
  //         name: z.string(),
  //         ingredients: z.array(
  //           z.object({ name: z.string(), amount: z.string() })
  //         ),
  //         steps: z.array(z.string()),
  //       })
  //     ),
  //   }),
  //   prompt,
  // });

  (async () => {
    console.log("CREATE STREAM OBJECT");
    const { partialObjectStream } = await streamObject({
      model: google("models/gemini-1.5-flash"),
      maxTokens: 1000,
      frequencyPenalty: 1,
      schema: z.object({
        recipes: z.array(
          z.object({
            name: z.string().describe("Name of the recipe"),
            ingredients: z.array(
              z.object({ name: z.string(), amount: z.string() })
            ),
            steps: z.array(z.string()),
            image: z
              .string()
              .describe("An URL of an image that represents the meal"),
          })
        ),
      }),
      prompt,
    });

    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }

    stream.done();
    console.log("STREAM DONE");
  })();

  console.log("RETURN STREAM");
  return { object: stream.value };
}

const mockData = {
  recipes: [
    {
      steps: [
        "Cook rice according to package directions.",
        "In a large skillet or wok, heat oil over medium heat.",
        "Add meat and cook until browned.",
        "Add carrots and cook until tender-crisp.",
        "Add rice, eggs, and soy sauce.",
        "Stir-fry until heated through.",
        "Serve immediately.",
      ],
      name: "Fried Rice",
      ingredients: [
        { name: "rice", amount: "1 cup" },
        { amount: "1 pound", name: "meat" },
        { name: "carrots", amount: "1 cup" },
        { amount: "2", name: "eggs" },
      ],
    },
    {
      ingredients: [
        { name: "rice", amount: "1 cup" },
        { name: "meat", amount: "1 pound" },
        { name: "carrots", amount: "1 cup" },
        { amount: "2", name: "eggs" },
      ],
      steps: [
        "Cook rice according to package directions.",
        "In a large skillet or wok, heat oil over medium heat.",
        "Add meat and cook until browned.",
        "Add carrots and cook until tender-crisp.",
        "Add rice, eggs, and soy sauce.",
        "Stir-fry until heated through.",
        "Serve immediately.",
      ],
      name: "Meat and Rice Stir-Fry",
    },
    {
      name: "Rice Bowl with Meat and Carrots",
      steps: [
        "Cook rice according to package directions.",
        "In a large skillet or wok, heat oil over medium heat.",
        "Add meat and cook until browned.",
        "Add carrots and cook until tender-crisp.",
        "Add rice, eggs, and soy sauce.",
        "Stir-fry until heated through.",
        "Serve immediately.",
      ],
      ingredients: [
        { name: "rice", amount: "1 cup" },
        { name: "meat", amount: "1 pound" },
        { amount: "1 cup", name: "carrots" },
        { name: "eggs", amount: "2" },
      ],
    },
    {
      name: "Meat and Rice with Carrots and Eggs",
      ingredients: [
        { amount: "1 cup", name: "rice" },
        { name: "meat", amount: "1 pound" },
        { amount: "1 cup", name: "carrots" },
        { name: "eggs", amount: "2" },
      ],
      steps: [
        "Cook rice according to package directions.",
        "In a large skillet or wok, heat oil over medium heat.",
        "Add meat and cook until browned.",
        "Add carrots and cook until tender-crisp.",
        "Add rice, eggs, and soy sauce.",
        "Stir-fry until heated through.",
        "Serve immediately.",
      ],
    },
    {
      name: "Rice, Meat, Carrots, and Eggs",
      ingredients: [
        { amount: "1 cup", name: "rice" },
        { name: "meat", amount: "1 pound" },
        { amount: "1 cup", name: "carrots" },
        { amount: "2", name: "eggs" },
      ],
      steps: [
        "Cook rice according to package directions.",
        "In a large skillet or wok, heat oil over medium heat.",
        "Add meat and cook until browned.",
        "Add carrots and cook until tender-crisp.",
        "Add rice, eggs, and soy sauce.",
        "Stir-fry until heated through.",
        "Serve immediately.",
      ],
    },
  ],
};
