import { FC } from "react";
import styles from "../ChefIA/ChefIA.module.css";
import { useChefStore } from "@/app/providers/chef-store-provider";
import { IngredientType } from "@/app/types/ingredients";

interface IngredientProps {
  ingredient: IngredientType;
}

const Ingredient: FC<IngredientProps> = ({ ingredient }) => {
  const { selectedIngredients, addIngredient, removeIngredient } = useChefStore(
    (store) => store
  );

  const isSelected = selectedIngredients.find(
    (ing) => ing.value === ingredient.value
  );

  const handleClick = (ingredient: IngredientType, selected: boolean) => () => {
    if (!selected) {
      addIngredient(ingredient);
    } else {
      removeIngredient(ingredient.value);
    }
  };

  return (
    <div
      title={ingredient.value[0].toUpperCase() + ingredient.value.slice(1)}
      className={`${styles.ingredient} ${
        !!isSelected ? styles.selectedIngredient : ""
      }`}
      onClick={handleClick(ingredient, !!isSelected)}
      data-value={ingredient.value}
      data-selected={false}
    >
      {ingredient.image}
    </div>
  );
};

export default Ingredient;
