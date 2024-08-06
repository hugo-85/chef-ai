"use client";

import { FC, useEffect, useState } from "react";
import styles from "../ChefIA/ChefIA.module.css";
import { useChefStore } from "@/app/providers/chef-store-provider";
import { StreamableValue, useStreamableValue } from "ai/rsc";
import { PartialRecipe } from "../ChefIA/schema";
import { generateRecipes } from "../ChefIA/actions";
import IngredientsGroup from "../ingredients_group/IngredientsGroup";
import { INGREDIENTS_GROUPS } from "@/app/lib/ingredients";
import Filter from "../filter/Filter";
import ChefPanelHeader from "../chef_panel_header/ChefPanelHeader";
import SelectedIngredients from "../selected_ingredients/SelectedIngredients";
import ApiKeyField from "../api_key_field/ApiKeyField";
import { RecipeType } from "@/app/types/recipes";

interface ChefPanelProps {}

const ChefPanel: FC<ChefPanelProps> = () => {
  const {
    apiKey,
    clear,
    selectedIngredients,
    filter,
    setRecipes,
    generating,
    updateGenerating,
    updateError,
  } = useChefStore((store) => store);

  const [recipeStream, setRecipeStream] =
    useState<StreamableValue<PartialRecipe>>();

  const [data, pending, error] = useStreamableValue(recipeStream);

  useEffect(() => {
    if (data || pending) updateGenerating(false);

    if (data && !pending && !error) {
      const partialData = data.recipes as RecipeType[];
      setRecipes(partialData);
    } else if (pending) {
      const message = pending as string;
      updateError(message);
    }
  }, [data, pending, error]);

  const groups = Object.entries(INGREDIENTS_GROUPS);

  const disabledGenerate = () => {
    return (
      !apiKey || apiKey === "" || selectedIngredients.length === 0 || generating
    );
  };

  const disabledClear = () => {
    return selectedIngredients.length === 0 || generating;
  };

  return (
    <form
      className={styles.chefPanel}
      onSubmit={async (e) => {
        e.preventDefault();

        if (
          !apiKey ||
          apiKey === "" ||
          generating ||
          selectedIngredients.length === 0
        ) {
          return;
        }

        updateGenerating(true);
        updateError("");

        setRecipeStream(
          await generateRecipes(
            `
            Generate deferent recipes with the ingredients that are listed below you can use any combination of these ingredients, but no more than 10 recipes

            ${selectedIngredients.map((ingredient) => `${ingredient.value} \n`)}
            `,
            apiKey
          )
        );
      }}
    >
      <ChefPanelHeader />
      <div className={styles.subHeader}>
        <Filter />
        <ApiKeyField />
      </div>
      <div className={styles.ingredientsGroups}>
        {groups.map((group) => (
          <IngredientsGroup
            key={group[0]}
            title={group[0]}
            ingredients={group[1]}
            filter={filter}
          />
        ))}
      </div>
      <SelectedIngredients />
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.button}
          onClick={clear}
          disabled={disabledClear()}
        >
          CLEAR
        </button>
        <button
          type="submit"
          className={styles.button}
          disabled={disabledGenerate()}
        >
          GENERATE
        </button>
      </div>
    </form>
  );
};

export default ChefPanel;
