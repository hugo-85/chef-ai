type RecipeIngredient = {
  name: string;
  amount: string;
};

export type RecipeType = {
  name: string;
  description: string;
  ingredients: string[] | RecipeIngredient[];
  steps: string[];
  image?: string;
};
