import { FC } from "react";
import { useChefStore } from "@/app/providers/chef-store-provider";
import Recipe from "../recipe/Recipe";
import styles from "./Recipes.module.css";

interface RecipesProps {}

const Recipes: FC<RecipesProps> = () => {
  const { recipes } = useChefStore((store) => store);
  return (
    <section className={styles.recipesMain}>
      <h1>Recipes</h1>
      {recipes.map((recipe, index) => (
        <Recipe key={`${recipe.name}-${index}`} recipe={recipe} />
      ))}
    </section>
  );
};

export default Recipes;
