import { createStore } from "zustand/vanilla";
import { IngredientType } from "../types/ingredients";

export type ChefState = {
  ingredients: string[];
  selectedIngredients: IngredientType[];
  recipes: any[];
  filter: string;
  apiKey: string;
  generating: boolean;
  error: string;
};

export type ChefActions = {
  addIngredient: (ingredient: IngredientType) => void;
  removeIngredient: (ingredient: string) => void;
  setRecipes: (recipes: any[]) => void;
  updateFilter: (search: string) => void;
  updateApiKey: (key: string) => void;
  clear: () => void;
  updateGenerating: (value: boolean) => void;
  updateError: (message: string) => void;
};

export type ChefStore = ChefState & ChefActions;

export const initChefStore = (): ChefState => {
  return {
    ingredients: ["carrots", "eggs", "rice", "milk", "meat"],
    selectedIngredients: [],
    recipes: [],
    filter: "",
    apiKey: "",
    generating: false,
    error: "",
  };
};

export const defaultInitState: ChefState = {
  ingredients: [],
  selectedIngredients: [],
  recipes: [],
  filter: "",
  apiKey: "",
  generating: false,
  error: "",
};

export const createChefStore = (initState: ChefState = defaultInitState) => {
  return createStore<ChefStore>()((set, get) => ({
    ...initState,
    addIngredient(ingredient: IngredientType) {
      const store = get();

      if (
        !store.selectedIngredients.find((ing) => ing.value === ingredient.value)
      )
        set({
          selectedIngredients: [...store.selectedIngredients, ingredient],
        });
    },
    removeIngredient(ingredient: string) {
      const store = get();
      const ingredientsCopy = store.selectedIngredients.filter(
        (ing) => ing.value !== ingredient
      );
      set({ selectedIngredients: ingredientsCopy });
    },
    setRecipes(recipes: any[]) {
      set({ recipes });
    },
    updateFilter(search: string) {
      set({ filter: search });
    },
    updateApiKey(key: string) {
      set({ apiKey: key });
    },
    clear() {
      set({ selectedIngredients: [], recipes: [] });
    },
    updateGenerating(value: boolean) {
      set({ generating: value });
    },
    updateError(message) {
      set({ error: message });
    },
  }));
};
