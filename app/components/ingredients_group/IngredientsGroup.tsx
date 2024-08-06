import { FC } from "react";
import Ingredient from "../ingredient/Ingredient";
import styles from "./IngredientsGroup.module.css";
import { IngredientType } from "@/app/types/ingredients";

interface IngredientsGroupProps {
  title: string;
  filter: string;
  ingredients: IngredientType[];
}

const IngredientsGroup: FC<IngredientsGroupProps> = ({
  title,
  ingredients,
  filter,
}) => {
  return (
    <fieldset className={styles.ingredientGroup}>
      <legend>{title}</legend>
      {ingredients.map((ing) =>
        ing.value.includes(filter) ? (
          <Ingredient key={ing.value} ingredient={ing} />
        ) : (
          ""
        )
      )}
    </fieldset>
  );
};

export default IngredientsGroup;
