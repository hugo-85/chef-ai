import { FC } from "react";
import { RecipeType } from "@/app/types/recipes";
import styles from "./Recipe.module.css";
import { getIconByValue } from "@/app/lib/ingredients";

interface RecipesProps {
  recipe: RecipeType;
}

const Recipe: FC<RecipesProps> = ({ recipe }) => {
  return (
    <details className={styles.recipeDetails}>
      <summary>{recipe.name}</summary>
      <div className={styles.recipeContent}>
        <div className={styles.recipeDescription}>
          <label className={styles.recipeLabel}>Description</label>
          <h3>{recipe.description}</h3>
        </div>
        <div className={styles.recipeIngredients}>
          <label className={styles.recipeLabel}>Ingredients</label>
          <ol className={styles.ingredientsList}>
            {recipe.ingredients.map((ing, index) =>
              typeof ing === "string" ? (
                <li key={`${ing}-${index}`}>{ing}</li>
              ) : (
                <li key={`${ing.name}-${ing.amount}-${index}`}>
                  {getIconByValue(ing.name)}
                  {`${ing.name} - ${ing.amount}`}
                </li>
              )
            )}
          </ol>
        </div>
        <div className={styles.recipeSteps}>
          <label className={styles.recipeLabel}>Steps</label>
          <ol className={styles.stepsList}>
            {recipe.steps.map((step, index) => (
              <li key={`${step.slice(1, 5)}-${index}`}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </details>
  );
};

export default Recipe;
